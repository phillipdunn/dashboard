import React, { Component } from 'react';
import styles from "./Button.module.scss";
class Button extends Component {
  state = {  }
  render() { 
    return <input type="submit" value={this.props.text} className={styles.button}></input>
  }
}
export default Button;
