import React, { Component } from 'react';
import styles from "./PhotoPage.module.scss";
import { storage} from 'firebase';
import FileInputBox from '../../utilities/FileInputBox/FileInputBox';
import ThumbNail from './ThumbNail/ThumbNail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'



class PhotoPage extends Component {
  state = { 
    images: [],
    image: '',
    setImage: null,
    url: '',
    setUrl: ''
   }

   getFile = () => (e) => this.setState({ image: e.target.files[0] });

   firebaseUploadHandler = () => {
    const {image} =this.state;
    const uploadTask = storage.ref(`images/${image}`).put(image);
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

  

  // uploadHandler = e => {
  //   const files = Array.from(e.target.files)
  //   const formData = new FormData()
  //   files.forEach((file, i) => {
  //     formData.append(i, file)
  //   })
  // }
  //   fetch(`${API_URL}/image-upload`, {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(res => res.json())
  //   .then(images => {
  //     this.setState({ 
  //       images
  //     })
  //   })
  // }

  // removeImage = id => {
  //   this.setState({
  //     images: this.state.images.filter(image => image.public_id !== id)
  //   })
  // }

  render() { 
    console.log(this.image)
    const { images } = this.state
    const content = () => {
          return <ThumbNail images={images} removeImage={this.removeImage} />          
    }
    
    return ( 
    <>
    <section className={styles.photoPage}>
    <button className={styles.addPhoto} onClick={ () => { this.firebaseUploadHandler(); this.uploadHandler(); }}>Add Photo</button>
      <FileInputBox onChange={this.getFile}/>        
      {content}
    </section> 
    </>
    );
  }
}
 
export default PhotoPage;

