import React, { Component } from 'react';
import styles from "./TaskItem.module.scss";
// import ContentEditable from 'react-contenteditable'

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = {
      checkBox: true,
      checkedMsg: '',
      html:''
    }
  }

  tick() {
    this.setState({
      checkBox: !this.state.checkBox
    })
    this.state.checkBox ? this.setState({ checkedMsg: 'checked' }) : this.setState({ checkedMsg: 'unchecked' })
  }

  render() { 
    const {task} =this.props;
    return ( 
      <>
      <div className={styles.taskItem} onClick={this.editContent} >{task.text}</div>
      <label >
        <input className={styles.checkboxDefault} type="checkbox" onClick={this.tick} />
        <span className={styles.checkbox}></span>
      </label>
      </>
     );
  }
}
export default TaskItem;
 

