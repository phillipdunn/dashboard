import React, { Component } from 'react';
import styles from "./TaskItem.module.scss";

class TaskItem extends Component {
  state = {  }

  toggleTask = (task) => {
    this.props.updateTask(task)
  }

  render() { 
    const {task} =this.props;
    return ( 
      <>
      <div className={styles.taskItem} onClick={this.toggleTask}>{task.text}</div>
      </>
     );
  }
}
export default TaskItem;
 

