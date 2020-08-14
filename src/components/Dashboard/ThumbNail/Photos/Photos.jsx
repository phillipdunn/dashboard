import React, { Component } from 'react';
import styles from "./Photos.module.scss";


class Photos extends Component {
  state = {  }
  render() { 
    const {title} =this.props
    return (
      <section className={styles.thumbNail}>
      <div className={styles.titleBar}>
        <div className={styles.title}>{title}</div>    
      </div>
    </section> 
      );
  }
}
 
export default Photos;

