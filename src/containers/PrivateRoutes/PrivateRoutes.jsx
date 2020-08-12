import React, {Component} from "react";
import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard"

class PrivateRoutes extends Component {
 
  render() {
    return (
      <>
        <NavBar/>
        <Dashboard/>
      </>
    );
 }
};

export default PrivateRoutes;
