import React, { Component } from 'react';
import styles from "./TaskInputBox.module.scss";
import ContentEditable from 'react-contenteditable'
 
export default class TaskInputBox extends Component {

  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "Add a task here",
    task: '',};
  };
 
  handleChange = evt => {
    this.setState({html: evt.target.value});
  };
 
    submitTask = (e) =>{
    e.preventDefault();
    this.props.addTask(this.state.html)
    document.getElementById('addTaskInput').value ='';
  }

  updateInput = (e) => {
    this.setState({task:e.target.value})
  }

  render = () => {
    return <form className={styles.taskInput} onSubmit={(e) => this.submitTask(e)}>>
            <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              id="addTaskInput"
            />
            <button onSubmit={(e) => this.submitTask(e)}>but</button>
            </form>
  };
};


// class TaskInputBox extends Component {
//   state = { 
//     task: '',
//    }

//   submitTask = (e) =>{
//     e.preventDefault();
//     this.props.addTask(this.state.task)
//     document.getElementById('addTaskInput').value='';
//   }

//   updateInput = (e) => {
//     this.setState({task:e.target.value})
//   }

//   render() { 
//     return ( 
//       <form onSubmit={(e) => this.submitTask(e)}>
//           <input id="addTaskInput" placeholder={this.props.placeholder} className={styles.taskInput} type="text" onChange={(e) => this.updateInput(e) } />
//       </form>
//      );
//   }
// }

// export default TaskInputBox;
 