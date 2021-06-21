import firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyCINoVixocz0fd-U1CrEjrKVJpuoVUJl50",
    authDomain: "advance-mantis-310014.firebaseapp.com",
    projectId: "advance-mantis-310014",
    storageBucket: "advance-mantis-310014.appspot.com",
    messagingSenderId: "391755588052",
    appId: "1:391755588052:web:42576848e689e1645d7641",
    measurementId: "G-H3T6EK24GF"
  };
  // Initialize Firebase

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
export default firebase.firestore();