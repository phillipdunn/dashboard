import React, { Component } from 'react';
import styles from "./TaskInputBox.module.scss";

class TaskInputBox extends Component {
  state = { 
    task: '',
   }

  submitTask = (e) =>{
    e.preventDefault();
    this.props.addTask(this.state.task)
    document.getElementById('addTaskInput').value='';
  }

  updateInput = (e) => {
    this.setState({task:e.target.value})
  }

  render() { 
    return ( 
      <form onSubmit={(e) => this.submitTask(e)}>
          <input id="addTaskInput" placeholder='Add task here' className={styles.taskInput} type="text" onChange={(e) => this.updateInput(e) } />
      </form>
     );
  }
}

export default TaskInputBox;
 