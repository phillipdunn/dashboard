import React, { Component } from 'react';
import styles from "./Sport.module.scss";

class Sport extends Component {
  state = {  }
  render() { 
    const {title} =this.props
    return (
      <section className={styles.thumbNail}>
      <div className={styles.titleBar}>
        <h2>{title}</h2>    
      </div>
    </section> 
      );
  }
}
export default Sport;