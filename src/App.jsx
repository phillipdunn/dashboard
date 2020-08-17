import React, { Component }from 'react';
import './App.css';
import { globalHistory } from '@reach/router';
import Routes from './containers/Routes/Routes';
import firebase from './firebase';
// import { firestore } from './firebase';

class App extends Component {
  state = {
    user: null,
    emailAddress: null,
    password: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  userSignInAttempt = event => {
    event.preventDefault();
    const { emailAddress, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => globalHistory.navigate('dashboard'))
      .catch(error => {
        alert("Oops. We couldn't sign you in. " + error.message);
      });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        globalHistory.navigate('dashboard');
        this.setState({ user: null });
      })
      .catch((error) => {
        alert("Sorry!" + error.message);
      });
  };

  setEmail = event => {
    this.setState({ emailAddress: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
  return <Routes
    userSignInAttempt={this.userSignInAttempt}
    signOut={this.signOut}
    setEmail={this.setEmail}
    setPassword={this.setPassword}
    user={this.state.user}
    emailAddress={this.state.emailAddress}
    password={this.state.password}
    />;
  }
}


export default App;
