// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaDrFpWb6HYzWBmtBWbKcLw27JBfkn_w",
  databaseURL :'https://blog-website-4348b-default-rtdb.firebaseio.com/',
  authDomain: "blog-website-4348b.firebaseapp.com",
  projectId: "blog-website-4348b",
  storageBucket: "blog-website-4348b.appspot.com",
  messagingSenderId: "743126458596",
  appId: "1:743126458596:web:353c6c2edd7e2ee212ccf1"
};

// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();