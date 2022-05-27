import firebase from "firebase/compat/app";
import 'firebase/compat/auth';        // for authentication
import 'firebase/compat/storage';     // for storage
import 'firebase/compat/database';    // for realtime database
import 'firebase/compat/firestore';   // for cloud firestore
import 'firebase/compat/messaging';   // for cloud messaging
import 'firebase/compat/functions';   // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyAp9MRr9r3HhgC9H90Zd7f4uaEI7PkTccA",
  authDomain: "mentor-b4ec0.firebaseapp.com",
  databaseURL: "https://mentor-b4ec0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mentor-b4ec0",
  storageBucket: "mentor-b4ec0.appspot.com",
  messagingSenderId: "27385013033",
  appId: "1:27385013033:web:8e59f1c77f009299b4cd38",
  measurementId: "G-MQQ2QGX4NY"
};

firebase.initializeApp(firebaseConfig);
export default firebase;