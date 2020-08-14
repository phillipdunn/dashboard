import React, { Component } from 'react';
import styles from "./News.module.scss";

class News extends Component {
  state = {  }
  render() { 
    const {title} =this.props
    return (
      <>
      <div className={styles.titleBar}>
        <h2>{title}</h2>    
      </div>
      <section className={styles.thumbNail}>
        
      </section> 
      </>
      );
  }
}
 
export default News;

