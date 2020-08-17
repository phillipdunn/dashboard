import React, { Component } from 'react';
import styles from "./NewsPage.module.scss";

class NewsPage extends Component {
  state = {}

  render() { 
    const {headline, story, text} = this.props
    return ( 
      <section className={styles.newsPage}>
        <p className={styles.header}>News</p>
        <h1 className={styles.title}>{headline}</h1>
        <p className={styles.text}>{text}</p>
        <a href={story} className={styles.story}><p className={styles.storyText}>Link to story</p></a>
      </section>
     );
  }
}
 
export default NewsPage;