import firebase from "firebase/app";
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXF-Yk_Qk3rPaHievQ4A4BPaVmnluQMjY",
  authDomain: "quiz-app-b5704.firebaseapp.com",
  projectId: "quiz-app-b5704",
  storageBucket: "quiz-app-b5704.appspot.com",
  messagingSenderId: "394576295386",
  appId: "1:394576295386:web:49e88dd04b397dae04fce3"
};

const googleProvider= new firebase.auth.GoogleAuthProvider()

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db, googleProvider };
