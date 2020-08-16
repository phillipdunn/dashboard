import React, { Component } from 'react';
import styles from "./TaskItems.module.scss";
import TaskItem from '../TaskItems/TaskItem/TaskItem';

class TaskItems extends Component {
  state = {  }

  render() { 
    const {tasks} =this.props;
    return ( 
      <div className={styles.taskList}> 
        {
          tasks.map((_task, _index) => {
            return(
              <TaskItem key ={_index} task={_task} />
            )
          })
        }
      </div>
     );
  }
}
 
export default TaskItems;
