import React, { Component } from 'react';
import styles from "./TaskPage.module.scss";
import shortid from 'shortid';
import TaskInputBox from '../../utilities/TaskInputBox';
import TaskItems from './TaskItems';



class TaskPage extends Component {
//   state = {
//     tasks: []
//   }

//   componentDidMount = () => {
//     const tasks = localStorage.getItem('tasks');
//     if(tasks) {
//       const savedTasks = JSON.parse(tasks);
//       this.setState({tasks: savedTasks});
//     } else {
//       console.log('no tasks')
//     }
//   }

//   addTask = async (task) => {
//     await this.setState({tasks:[...this.state.tasks,{
//       id: shortid.generate(),
//       text: task,
//       completed: false
//     }] });
//    localStorage.setItem('tasks',JSON.stringify(this.state.tasks))
//    console.log(localStorage.getItem('tasks'));
//  }

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

