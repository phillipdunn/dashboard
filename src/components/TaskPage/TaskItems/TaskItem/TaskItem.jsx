import React, { Component } from 'react';
import styles from "./TaskItem.module.scss";

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

  // handleChange = (e) =>   {this.setState({html: e.target.value})}.bind(this);
  // onChange={this.handleChange()}

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
      <div className={styles.taskItem} contentEditable="true" >{task.text}</div>
      <label >
        <input className={styles.checkboxDef} type="checkbox" onClick={this.tick} />
        <span className={styles.checkbox}></span>
      </label>
      </>
     );
  }
}
export default TaskItem;
 

