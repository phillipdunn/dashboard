import React, {Component} from "react";
import firebase from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard"
import PhotoPage from "../../components/PhotoPage/PhotoPage";
import NewsPage from "../../components/NewsPage/NewsPage";
import TaskPage from "../../components/TaskPage/TaskPage";
import SportPage from "../../components/SportPage/SportPage";
import shortid from 'shortid';

class PrivateRoutes extends Component {
  state = {
    story: '',
    headline: '',
    text: '',
    tasks: []
  }

  getNews = () => {
    return fetch('https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml')
    .then (response => response.text())
    .then ((data) => {
      let parser = new DOMParser(),
        XMLDocument = parser.parseFromString(data, 'text/xml');
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

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      const savedTasks = JSON.parse(tasks);
      this.setState({tasks: savedTasks});
    } else {
      console.log('no tasks')
    }
    this.checkAuthorization();
    this.getNews()
  }

  addTask = async (task) => {
    await this.setState({tasks:[...this.state.tasks,{
      id: shortid.generate(),
      text: task,
      completed: false
    }] });
   localStorage.setItem('tasks',JSON.stringify(this.state.tasks))
   console.log(localStorage.getItem('tasks'));
 }

  render() {
    const {user, signOut} = this.props
    const {headline, story, text, tasks} = this.state
    return (
      <>
        <NavBar signOut={signOut}/>
        <Router> 
          <Dashboard default path="dashboard" user={user} headline={headline} story={story} text={text} tasks={tasks} addTask={this.addTask}/>
          <PhotoPage path="photopage" user={user}/>
          <NewsPage path="newspage" user={user} headline={headline} story={story} text={text}/>
          <SportPage path="sportpage" user={user}/>
          <TaskPage path="taskpage" user={user} tasks={this.state.tasks} addTask={this.addTask}/>   
        </Router>
      </>
    );
 }
};

export default PrivateRoutes;
