import React, {Component} from "react";
import firebase from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard"
import PhotoPage from "../../components/PhotoPage/PhotoPage";
import NewsPage from "../../components/NewsPage/NewsPage";
import TaskPage from "../../components/TaskPage/TaskPage";
import SportPage from "../../components/SportPage/SportPage";

class PrivateRoutes extends Component {
  state = {
    story: '',
    headline: '',
    text: ''
  }

  getNews = () => {
    return fetch('https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml')
    .then (response => response.text())
    .then ((data) => {
      let parser = new DOMParser(),
        XMLDocument = parser.parseFromString(data, 'text/xml');
        console.log(XMLDocument)

        this.setState({
          headline : XMLDocument.getElementsByTagName('item')[0].firstElementChild.innerHTML.replace("<![CDATA[","").replace("]]>",""),
          story : XMLDocument.getElementsByTagName('item')[0].firstElementChild.nextElementSibling.nextElementSibling.innerHTML, 
          text: XMLDocument.getElementsByTagName('item')[0].firstElementChild.nextElementSibling.innerHTML.replace("<![CDATA[","").replace("]]>","")
        })
    })
    .catch(error => console.log(error))  
  };
    
  checkAuthorization = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        globalHistory.navigate("login");
      }
    });
  }
 
  componentDidMount() {
    this.checkAuthorization();
    this.getNews()
  }

  render() {
    const {user, signOut} = this.props
    const {headline, story, text} = this.state
    return (
      <>
        <NavBar signOut={signOut}/>
        <Router> 
          <Dashboard default path="dashboard" user={user} headline={headline} story={story} text={text}/>
          <PhotoPage path="photopage" user={user}/>
          <NewsPage path="newspage" user={user} headline={headline} story={story} text={text}/>
          <SportPage path="sportpage" user={user}/>
          <TaskPage path="taskpage" user={user}/>   
        </Router>
      </>
    );
 }
};

export default PrivateRoutes;
