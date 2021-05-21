import firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAmX7ImL8u8yqwagggIFNxsVLeEGP_UD1A",
    authDomain: "woof-dev-fed7f.firebaseapp.com",
    projectId: "woof-dev-fed7f",
    storageBucket: "woof-dev-fed7f.appspot.com",
    messagingSenderId: "1093887567945",
    appId: "1:1093887567945:web:51a3674cdc372da635b798"
})

export const auth = app.auth()