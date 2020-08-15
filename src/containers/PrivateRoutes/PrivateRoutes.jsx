import React, {Component} from "react";
import firebase from "../../firebase";
import { Router, globalHistory } from "@reach/router";
import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard"
import PhotoPage from "../../components/PhotoPage/PhotoPage";
import NewsPage from "../../components/NewsPage/NewsPage";
import TaskPage from "../../components/TaskPage/TaskPage";
import SportPage from "../../components/SportPage/SportPage";

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
        <NavBar signOut={signOut}/>
        <Router> 
          <Dashboard default path="dashboard" user={user}/>
          <PhotoPage path="photopage" user={user}/>
          <NewsPage path="newspage" user={user}/>
          <SportPage path="sportpage" user={user}/>
          <TaskPage path="taskpage" user={user}/>
          
        </Router>
      </>
    );
 }
};

export default PrivateRoutes;
