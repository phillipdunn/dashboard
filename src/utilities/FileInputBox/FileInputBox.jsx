import React, { Component } from 'react';
import styles from "./FileInputBox.module.scss";
import { storage} from 'firebase';

class FileInputBox extends Component {

  state = {
    image: null,
    setImage: null,
    url: '',
    setUrl: ''
  }
  
    uploadHandler = () => {
      const {image} =this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',
        (snapshot) => {},
        (error) => { 
          console.log(error)
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url => {
            console.log(url);
            });
        }
      );
    }; 
      
  render() { 
    console.log(this.state.image)
    return ( 
      <>
        <label className={styles.fileInputBox} for="file-input">      
        <span><input id= "file-input" type="file" onChange={(e) => this.setState({ image: e.target.files[0] })} /></span>
        </label>
      </>
     );
  }
}
 
export default FileInputBox;
