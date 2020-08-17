import React, { Component } from 'react';
import styles from "./FileInputBox.module.scss";
class FileInputBox extends Component {

  state = {
  }
      
  render() { 
    const {getFile} =this.props
    return ( 
      <>
        <label className={styles.fileInputBox} htmlFor="file-input">      
        <span><input id= "file-input" type="file" onChange={getFile} /></span>
        </label>
      </>
     );
  }
}
 
export default FileInputBox;
