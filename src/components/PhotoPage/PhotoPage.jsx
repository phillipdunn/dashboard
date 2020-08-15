import React, { Component } from 'react';
import styles from "./PhotoPage.module.scss";
import FileInputBox from '../../utilities/FileInputBox/FileInputBox';
import ThumbNail from '../Dashboard/ThumbNail/ThumbNail';


class PhotoPage extends Component {
  state = {  }
  render() { 
    return ( 
    <>
    <section className={styles.photoPage}>
    {/* <button className={styles.addPhoto} onClick= {this.uploadHandler}>Add Photo</button> */}
      <FileInputBox/>        
      <ThumbNail/>
      <ThumbNail/>
      <ThumbNail/>
      <ThumbNail/>
      <ThumbNail/>
    </section> 
    </>
    );
  }
}
 
export default PhotoPage;

