import React, { Component } from 'react';
import styles from "./Tasks.module.scss";

class Tasks extends Component {
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
 
export default Tasks;