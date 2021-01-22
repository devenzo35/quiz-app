import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAB6dVPH1zbqefWeCn61gtERD8luStV98k",
  authDomain: "quiz-app-a4525.firebaseapp.com",
  projectId: "quiz-app-a4525",
  storageBucket: "quiz-app-a4525.appspot.com",
  messagingSenderId: "1087665009294",
  appId: "1:1087665009294:web:2bd2452127de0ef1558fdf",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
