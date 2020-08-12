import React, { Component } from 'react';
import styles from "./InputBox.module.scss";

class InputBox extends Component {
  render() { 
    return <input className={styles.inputBox} id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} autoComplete={this.props.autoComplete} onChange={this.props.inputHandler} />;
  }
}
export default InputBox;
