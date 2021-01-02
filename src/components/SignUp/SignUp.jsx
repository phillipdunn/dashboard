import React, { Component } from 'react';
import styles from "./SignUp.module.scss";
import Button from "../../utilities/Button";
import InputBox from "../../utilities/InputBox";
import firebase from "../../firebase";
import { Link } from "@reach/router";
// import {storage} from "../../firebase";

class SignUp extends Component {
  state = { 
    ID: '',   
    name: '',
    email: '',
    password: '', 
    checkPassword: '',
    img: null
   }

   inputHandler = (event) => {
    event.preventDefault();
    this.createUser(this.state)
  }

  // uploadPicture = (img) => {
  //   let file = img
  //   let storageRef = storage.ref();
  //   ref.put(file).then(function(snapshot){console.log('uploaded')});
  // }

  createUser = (info) => {
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(info.email, info.password)
      .then(data => {
        this.setState({ID: data.user.uid})
      })
      .catch((error) => {
        console.log(error)
      })
      .then(this.uploadPicture(this.state.img))

  }

  render() { 
    console.log(this.props.user)
    return (
      <>
      <section className={styles.signUpPage}>
        <section className={styles.signUpBox}>
          <h1>Sign Up</h1>
          <form className={styles.signUpForm} onSubmit={this.inputHandler}>
            <div className={styles.inputLine}>
              <InputBox id="name" type="text" placeholder="Name" name="name"
                inputHandler={(e) => this.setState({ name: e.target.value })} />
            </div>
            <div className={styles.inputLine}>
              <InputBox id="email" type="email" name="email" placeholder="Email"
                inputHandler={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className={styles.inputLine}>
              <InputBox id="password" type="password" name="password" placeholder="Password"
                inputHandler={(e) => this.setState({ password: e.target.value })} />
            </div>
            <div className={styles.inputLine}>
              <InputBox id="reEnterPassword" type="password" name="password" placeholder="Confirm Password"
                inputHandler={(e) => this.setState({ checkPassword: e.target.value })} />
            </div>
            <div className={styles.inputLine}>
             <label className={styles.inputImageLabel}>Add a profile pic:</label>
            </div>
            <section className={styles.inputImage}>
              <input type="file" multiple="" onInput={(e) => this.setState({ img: e.target.value })} />
            </section>
            <div>
              <Button text="Register"/>
            </div>
            </form>
            <Link to="/login" className={styles.cancelLink}>Cancel</Link>
          </section>
        </section>
      </>
    );
  }
}
 
export default SignUp;
