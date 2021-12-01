import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { userRef } from 'react';


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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  