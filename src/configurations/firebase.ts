import { initializeApp } from "firebase/app";
​​import {
​​  PhoneAuthProvider,
​​  getAuth,
​​  signInWithPopup,
​​  signInWithEmailAndPassword,
​​  createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
​​} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: 'xxxxxxxxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxxxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxxxxx',
};


initializeApp(firebaseConfig)

const auth = getAuth();