import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "your key",
  authDomain: "your domian",
  databaseURL: "hyour database url",
  projectId: "your project id",
  storageBucket: "your buget",
  messagingSenderId: "your messaginId",
};

var fire = firebase.initializeApp(config);
export default fire;
