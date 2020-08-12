import React, {Component} from "react";
import { Router } from '@reach/router';
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import LogIn from "../../components/LogIn";
import SignUp from "../../components/SignUp";

class Routes extends Component {

  render() {
    return (
      <>
        {/* <Router> */}
          <PrivateRoutes/>
          <LogIn/>
          <SignUp/>    
        {/* </Router> */}
      </>
    );
  }
};

export default Routes;
