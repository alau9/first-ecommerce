import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDFQKFqXzX4N7jxPUsGRTVpc2V0iyOg8_k",
    authDomain: "crwn-db-21bd7.firebaseapp.com",
    projectId: "crwn-db-21bd7",
    storageBucket: "crwn-db-21bd7.appspot.com",
    messagingSenderId: "187821026716",
    appId: "1:187821026716:web:be8fb5c84c75387b5aac59",
    measurementId: "G-WB3PFH1TZX"
  };

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;