import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATL9lcjyq2dYQG6OjCQDkknuJ3QkB8IzE",
    authDomain: "j-facebook.firebaseapp.com",
    projectId: "j-facebook",
    storageBucket: "j-facebook.appspot.com",
    messagingSenderId: "1042349018584",
    appId: "1:1042349018584:web:2cce88fe96b13030cdf6ad",
    measurementId: "G-ZB3BDVEHZH"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;



