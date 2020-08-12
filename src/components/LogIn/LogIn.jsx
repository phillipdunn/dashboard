import React, { Component } from 'react';
import styles from "./LogIn.module.scss";
import InputBox from "../../utilities/InputBox";

class LogIn extends Component {
  state = {  }
  render() { 
    const { userSignInAttempt, setEmail, setPassword } = this.props;
    return ( 
      <>
      <section className={styles.logInPage}>
      <form onSubmit={userSignInAttempt}>
                    <div className={styles.inputLine}>
                      <InputBox id="email" type="email" name="email" placeholder="Email"
                        inputHandler={setEmail} autoComplete={"current-email"} />
                    </div>
                    <div className={styles.inputLine}>
                      <InputBox id="password" type="password" name="password" placeholder="Password"
                        inputHandler={setPassword} autoComplete={"current-password"} />
                    </div>
                  </form>
      </section>
  
      </>
     );
  }
}
 
export default LogIn;
