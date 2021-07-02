import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgvYaL2AHuQHLvcvLhRVFhayX807EvWCk",
    authDomain: "todoapp-4ced2.firebaseapp.com",
    projectId: "todoapp-4ced2",
    storageBucket: "todoapp-4ced2.appspot.com",
    messagingSenderId: "5033889780",
    appId: "1:5033889780:web:187cb6b954705ab0e633a1",
    measurementId: "G-GN28JNWSEV"
});
const db = firebaseApp.firestore();

export default db ;