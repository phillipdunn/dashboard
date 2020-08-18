import React, { Component } from 'react';
import styles from "./TaskPage.module.scss";
import TaskInputBox from '../../utilities/TaskInputBox';
import TaskItems from './TaskItems';



class TaskPage extends Component {

  render() { 
    return ( 
      <section className={styles.taskPage}>
        <p className={styles.header}>Tasks</p>
        <div className={styles.inputLine}> 
          <TaskInputBox addTask={this.props.addTask} placeholder="Add task here..."/>   
          </div>
        <TaskItems tasks={this.props.tasks}/>
     
      </section>
     );
  }
}
 
export default TaskPage;

