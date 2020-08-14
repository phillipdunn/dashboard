import React, { Component } from 'react';
import styles from "./PhotoPage.module.scss";
import FileInputBox from '../../utilities/FileInputBox/FileInputBox';


class PhotoPage extends Component {
  state = {  }
  render() { 
    return ( 
    <>
    <section className={styles.photoPage}>
      <FileInputBox/>        
      <FileInputBox/>        
      <FileInputBox/>        
      <FileInputBox/>        
      <FileInputBox/>        
      <FileInputBox/>        
    </section> 
    </>
    );
  }
}
 
export default PhotoPage;

