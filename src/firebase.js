import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4b46TcDRUWDXKGPfClVjIYlcwNXat2WQ",
    authDomain: "dashboard-3ca1d.firebaseapp.com",
    databaseURL: "https://dashboard-3ca1d.firebaseio.com",
    projectId: "dashboard-3ca1d",
    storageBucket: "dashboard-3ca1d.appspot.com",
    messagingSenderId: "493589797955",
    appId: "1:493589797955:web:258b43a2283d8ed94188f6",
    measurementId: "G-1BS1Y8MS2E"
  };

firebase.initializeApp(firebaseConfig);
  
export const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export default firebase;