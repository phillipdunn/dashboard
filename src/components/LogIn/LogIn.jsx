import React, { Component } from 'react';
import styles from "./LogIn.module.scss";
import { Link } from "@reach/router";
// import { firestore } from "../../firebase";
import InputBox from "../../utilities/InputBox";
import Button from "../../utilities/Button";

class LogIn extends Component {
  
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
          <div className={styles.buttonWrap}>
            <Button text="Login"/>
          </div>
        </form>
        <p>New to dashboards? <Link to="signup" className={styles.signUp}>Sign up</Link></p>
      </section>
      </>
     );
  }
}
 
export default LogIn;
