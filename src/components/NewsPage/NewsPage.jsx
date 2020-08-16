import React, { Component } from 'react';
import styles from "./NewsPage.module.scss";

class NewsPage extends Component {
  state = {
    img: '',
    title: '',
    text: ''
   }

  getNews = () => {
    return fetch('https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news/rss.xml')
    .then (response => response.text())
    .then ((data) => {
      let parser = new DOMParser(),
        XMLDocument = parser.parseFromString(data, 'text/xml');
        // XMLDocument = XMLDocument.Replace("![CDATA[","").Replace("]]","")
        // XMLDocument.Save()

        this.setState({
          title : XMLDocument.getElementsByTagName('item')[0].firstElementChild.innerHTML,
          img : XMLDocument.getElementsByTagName('item')[0].firstElementChild.nextElementSibling.nextElementSibling.nodeValue, 
          text: XMLDocument.getElementsByTagName('item')[0].firstElementChild.nextElementSibling.innerHTML
        })
    })
    .catch(error => console.log(error))  
  };

  componentDidMount() {
    this.getNews()
  }

  render() { 
    const {title, img, text} = this.state
    return ( 
      <section className={styles.newsPage}>
        <h1 className={styles.title}>{title}</h1>
        <img src={img} alt="pic" className={styles.img}/> 
        <p className={styles.text}>{text}</p>
      </section>
     );
  }
}
 
export default NewsPage;