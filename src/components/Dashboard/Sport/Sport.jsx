import React, { Component } from 'react';
import styles from "./Sport.module.scss";

class Sport extends Component {
  state = {  }
  render() { 
    const {title} =this.props
    return (
      <section className={styles.thumbNail}>
      <div className={styles.titleBar}>
        <p className={styles.title}>{title}</p>    
      </div>
    </section> 
      );
  }
}
export default Sport;