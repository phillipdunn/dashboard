import React, { Component } from 'react';
import styles from "./LogIn.module.scss";
import { Link } from "@reach/router";
import GoogleButton from 'react-google-button'
import InputBox from "../../utilities/InputBox";
import Button from "../../utilities/Button";

class LogIn extends Component {
  
  render() { 
    const { userSignInAttempt, setEmail, setPassword, signInGoogle } = this.props;
    return ( 
      <>
      <section className={styles.logInPage}> 
        <section className={styles.loginBox}>
          <h1>My Dashboard</h1>
          <div className={styles.googleBtnWrap} >
           <GoogleButton onClick={signInGoogle}/>
          </div>
          <form className={styles.logInForm} onSubmit={userSignInAttempt}>
            <div className={styles.inputLine}>
              <InputBox id="email" type="email" name="email" placeholder="Email"
                inputHandler={setEmail} autoComplete={"current-email"} />
            </div>
            <div className={styles.inputLine}>
              <InputBox id="password" type="password" name="password" placeholder="Password"
                inputHandler={setPassword} autoComplete={"current-password"} />
            </div>
            <div>
              <Button text="Login"/>
            </div>
          </form>
          <Link to="/signup" className={styles.signUp}> Sign up</Link>
        </section>
      </section>
      </>
     );
  }
}
 
export default LogIn;
