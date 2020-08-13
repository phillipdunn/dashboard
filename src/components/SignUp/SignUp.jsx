import React, { Component } from 'react';
import styles from "./SignUp.module.scss";
import Button from "../../utilities/Button";
import InputBox from "../../utilities/InputBox";
import firebase, { firestore } from "../../firebase";

class SignUp extends Component {
  state = { 
    ID: '',   
    name: '',
    email: '',
    password: '', 
    checkPassword: '',
    img: ''
   }

   inputHandler = (event) => {
    event.preventDefault();
    this.createUser(this.state)
  }

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
  }

  render() { 
    return (
        <>
      <section className={styles.signUpPage}>
        <h1>Sign Up</h1>
        <form className={styles.signUpForm} onSubmit={this.inputHandler}>
          <div className={styles.inputLine}>
            <InputBox id="name" type="text" placeholder="Name" name="name"
              onChange={(e) => this.setState({ name: e.target.value })} />
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
            <InputBox id="password" type="password" name="password" placeholder="Confirm Password"
              inputHandler={(e) => this.setState({ checkPassword: e.target.value })} />
          </div>
          <div >
              <input className={styles.inputImage} type="text" placeholder="URL" onInput={(e) => this.setState({ img: e.target.value })} />
            </div>
            <div>
            <Button text="Register"/>
            <button type="button" text={"Cancel"} onClick={this.props.toggleAddUser} className={styles.cancelBtn}>Cancel</button>
        </div>
        </form>
        
       
      </section>
      </>
    );
  }
}
 
export default SignUp;