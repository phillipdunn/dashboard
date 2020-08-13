import React, { Component } from 'react';
import styles from "./LogIn.module.scss";
import { Link } from "@reach/router";
import { firestore } from "../../firebase";
import InputBox from "../../utilities/InputBox";
import Button from "../../utilities/Button";

class LogIn extends Component {
  state = { 
    users: []
   }

  // componentDidMount() {
  //   this.getUsers();
  //     firestore
  //       .collection('info')
  //       .where("ID", "==", this.props.user.uid )
  //       .get()
  //       .then(snapshot => {
  //         snapshot.docs
  //           .forEach(doc => {
  //           this.setState({userInfo: doc.data()})
  //           })
  //       })   
  //       .catch(err => console.log(err))
  // }
  
  getUsers = () => {
    firestore
      .collection('info')
      .get()
      .then((snapshot) => {
        const users = snapshot.docs
          .map((doc => doc.data()))
        this.setState({ users })
      })
  }
  render() { 
    const { userSignInAttempt, setEmail, setPassword } = this.props;
    return ( 
      <>
      <section className={styles.logInPage}>
        <h1>Welcome!</h1>
        <form className={styles.logInForm} onSubmit={userSignInAttempt}>
          <div className={styles.inputLine}>
            <InputBox id="email" type="email" name="email" placeholder="Email"
              inputHandler={setEmail} autoComplete={"current-email"} />
          </div>
          <div className={styles.inputLine}>
            <InputBox id="password" type="password" name="password" placeholder="Password"
              inputHandler={setPassword} autoComplete={"current-password"} />
          </div>
        </form>
        <div className={styles.buttonWrap}/>
        <Button text="Login"/>
        <p>New to dashboards? <Link to="/signup" className={styles.signUp}>Sign up</Link></p>
      </section>
      </>
     );
  }
}

//getUsers={this.getUsers}
 
export default LogIn;
