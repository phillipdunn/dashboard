import React, {Component} from "react";
import firebase from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard"

class PrivateRoutes extends Component {

  state = {}

  checkAuthorization = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        globalHistory.navigate("login");
      }
    });
  }
 
  componentDidMount() {
    this.checkAuthorization();
  }

  render() {
    const {user, signOut} = this.props;
    return (
      <>
        <NavBar signOut={this.props.signOut} />
        <Router> 
        <Dashboard default path="dashboard" user={user} signOut={signOut}/>
        </Router>
      </>
    );
 }
};

export default PrivateRoutes;
