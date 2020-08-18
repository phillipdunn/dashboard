import React, { Component } from 'react';
import styles from "./PhotoPage.module.scss";
import { storage} from 'firebase';
import FileInputBox from '../../utilities/FileInputBox/FileInputBox';
import ThumbNail from './ThumbNail/ThumbNail';

class PhotoPage extends Component {
  // state = { 
  //   allInputs: {imgUrl: ''},
  //   imageAsFile: '',
  //   setImageAsFile: '',
  //   imageAsUrl: this.allInputs, 
  //   setImageAsUrl: this.allInputs
  //  }

  //  getFile = (e) => {
  //   const image = e.target.files[0]
  //   this.setImageAsFile(imageFile => image)
  // //   this.setState({imageAsFile: {image}})
  // }

  //  firebaseUploadHandler = (e) => {
  //     // e.preventDefault()
  //     console.log('start of upload')
  //     if(this.imageAsFile === '') {
  //       console.error(`not an image, the image file is a ${typeof(this.imageAsFile)}`)
  //     }
  //     console.log(this.state)
  //     const uploadTask = storage.ref(`/images/${this.state.imageAsFile.name}`).put(this.imageAsFile)
  //     uploadTask.on('state_changed', 
  //     (snapShot) => {
  //       console.log(snapShot)
  //     }, (err) => {
  //       console.log(err)
  //     }, () => {
  //       storage.ref('images').child(this.imageAsFile.name).getDownloadURL()
  //        .then(fireBaseUrl => {
  //          this.setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
  //        })
  //     })
  //     }

  render() { 
    // console.log(this.image)
    // const { images } = this.state
    // const content = () => {
    //       return <ThumbNail images={images} removeImage={this.removeImage} />          
    // }
    
    return ( 
    <>
    <section className={styles.photoPage}>
      {/* <form onSubmit={ this.firebaseUploadHandler()}>
      <FileInputBox onChange={this.getFile()}/>        
      {content} 
      </form> */}
    </section> 
    </>
    );
  }
}
 
export default PhotoPage;

