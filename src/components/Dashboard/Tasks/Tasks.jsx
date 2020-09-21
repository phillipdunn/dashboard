import React, { Component } from "react";
import styles from "./Tasks.module.scss";
// import TaskItems from '../../TaskPage/TaskItems';

class Tasks extends Component {
  state = {};
  render() {
    const { title } = this.props;
    return (
      <section className={styles.thumbNail}>
        <div className={styles.titleBar}>
          <div className={styles.title}>{title}</div>
        </div>
        <section className={styles.thumbNail}>
          {/* <span className={styles.items}><TaskItems tasks={this.props.tasks} addTask={this.props.addTask}/></span> */}
        </section>
      </section>
    );
  }
}

export default Tasks;
