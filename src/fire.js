import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBc2LsY3ugJovsixBGX5eGPwo7zT2jOzik",
  authDomain: "vuechatapp-85b3e.firebaseapp.com",
  databaseURL: "https://vuechatapp-85b3e.firebaseio.com",
  projectId: "vuechatapp-85b3e",
  storageBucket: "vuechatapp-85b3e.appspot.com",
  messagingSenderId: "460895413006",
};

var fire = firebase.initializeApp(config);
export default fire;
