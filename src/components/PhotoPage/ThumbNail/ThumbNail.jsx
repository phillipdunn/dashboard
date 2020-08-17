import React, { Component } from 'react';
import styles from "./ThumbNail.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class ThumbNail extends Component {
  state = {  }

  content = () => {
  this.props.images.map((image, i) =>
  <div key={i} className='fadein'>
    <div 
      onClick={() => this.props.removeImage(image.public_id)} 
      className='delete'
    >
      <FontAwesomeIcon icon={faTimesCircle} size='2x' />
    </div>
    <img src={image.secure_url} alt='' />
  </div>
)}

  render() { 
    return (
      <>
       <section className={styles.thumbNail}>
         {this.content}
       </section> 
      </>
      );
  }
}
export default ThumbNail;