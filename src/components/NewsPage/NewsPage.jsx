import React, { Component } from 'react';
import styles from "./NewsPage.module.scss";

class NewsPage extends Component {
  state = { 
    headline:'',
    body''
   }

  //  componentDidMount() {
  //   axios
  //   .get("http://feeds.bbci.co.uk/news/rss.xml", {
  //     "Content-Type": "application/xml; charset=utf-8"
  //   })
  //   .then(response => this.setState({ authors: response.data }));
  //   .catch(error => console.log(error));
  //   };

  getNews = () => {
    const parseString = require('x2js').parseString
    return fetch('http://feeds.bbci.co.uk/news/rss.xml')
    .then (response => response.text())
    .then ((response) => { 
      parseString(response => console.log(response)) 

    // this.setState({
    //   headline: 
    // })) 
  })
    .catch(error => console.log(error))  
  }

  componentDidMount() {
    this.getNews()
  }

  render() { 
    return ( 
      <>
      </>
     );
  }
}
 
export default NewsPage;
