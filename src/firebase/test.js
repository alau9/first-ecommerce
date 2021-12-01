import firebase from "@firebase/app-compat";
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users')
