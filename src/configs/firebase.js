import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA95tp5R0ZfzhQ3-KC-nxNOvu1J5hlfs7Y",
  authDomain: "demovue3js.firebaseapp.com",
  projectId: "demovue3js",
  storageBucket: "demovue3js.appspot.com",
  messagingSenderId: "550514974582",
  appId: "1:550514974582:web:9c5e89a53d17db868de457",
  measurementId: "G-1GFXXJBKVT"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const fireStoreCore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fireStoreCore , projectAuth , timestamp};
