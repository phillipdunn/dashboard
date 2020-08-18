import React, { Component } from 'react';
import styles from "./News.module.scss";


class News extends Component {
  render() { 
    const {title} =this.props
    const {headline, text} = this.props
    return (
      <>
      <div className={styles.titleBar}>
        <p className={styles.title}>{title}</p>    
      </div>
      <section className={styles.thumbNail}>
        <p className={styles.head}>{headline}</p>
        <p className={styles.text}>{text}</p>
      </section> 
      </>
      );
  }
}
 
export default News;
