// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_obmlUegFN_AT9g0pNsDLTaIXPlaaOe0",
    authDomain: "clone-2-fea41.firebaseapp.com",
    projectId: "clone-2-fea41",
    storageBucket: "clone-2-fea41.appspot.com",
    messagingSenderId: "629237938418",
    appId: "1:629237938418:web:3a8363a08ecc6c371b786b",
    measurementId: "G-N54791XBHZ"
};

//  connected firebase to database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//  creating authentication
const auth = firebase.auth();

//  provide the google authentication 
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };