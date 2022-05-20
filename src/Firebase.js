import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmX7ImL8u8yqwagggIFNxsVLeEGP_UD1A",
  authDomain: "woof-dev-fed7f.firebaseapp.com",
  projectId: "woof-dev-fed7f",
  storageBucket: "woof-dev-fed7f.appspot.com",
  messagingSenderId: "1093887567945",
  appId: "1:1093887567945:web:51a3674cdc372da635b798"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
  

export { db, auth, app,firebase };