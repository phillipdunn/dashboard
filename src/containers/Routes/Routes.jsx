import React, {Component} from "react";
import { Router } from '@reach/router';
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import LogIn from "../../components/LogIn";
import SignUp from "../../components/SignUp/SignUp";

class Routes extends Component {

  render() {
    const { userSignInAttempt, signOut, setEmail, setPassword, user, emailAddress, password } = this.props;
    return (
      <>
        <Router>
          {user ?
            <PrivateRoutes
              user={user} 
              signOut={signOut} 
              default path="/"/>
            : <LogIn default path="login"
              user={user}
              userSignInAttempt={userSignInAttempt}
              emailAddress={emailAddress} setEmail={setEmail}
              password={password} setPassword={setPassword}
              signOut={signOut}
            />
          } 
          <SignUp default path="signup"/>
        </Router>
      </>
    );
  }
};

export default Routes;
