import React, { Component } from 'react';
import styles from "./FileInputBox.module.scss";

class FileInputBox extends Component {
  state = {
    photo: '',
    imagePreviewURL: ''
    }

  pressButton = (e) => {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  photoHandler = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onload = () => {
      this.setState({
        file:file,
        imagePreviewURL: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  render() { 
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} alt="images" />;
    } else { }

    return ( 
      <>
      <form action="." enctype="multipart/form-data">
      <input className={styles.fileInputBox} type='file' onChange={this.photoHandler}/>
      </form>
      {imagePreview}
      </>
     );
  }
}
 
export default FileInputBox;
