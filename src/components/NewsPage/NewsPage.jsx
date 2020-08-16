import React, { Component } from 'react';
import styles from "./NewsPage.module.scss";

class NewsPage extends Component {
  state = {}

  render() { 
    const {headline, img, text} = this.props
    return ( 
      <section className={styles.newsPage}>
        <h1 className={styles.title}>{headline}</h1>
        <img src={img} alt="pic" className={styles.img}/> 
        <p className={styles.text}>{text}</p>
      </section>
     );
  }
}
 
export default NewsPage;