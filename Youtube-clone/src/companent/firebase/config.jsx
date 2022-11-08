import firebase from "firebase/app";
import "firebase/auth"


const config = firebase.initializeApp({
    apiKey: "AIzaSyAWr8DzvVlAKwrumc0gX6zGlX8-MIAemXY",
    authDomain: "data-base-dd75d.firebaseapp.com",
    projectId: "data-base-dd75d",
    storageBucket: "data-base-dd75d.appspot.com",
    messagingSenderId: "624803887840",
    appId: "1:624803887840:web:05a0aaf5a4711d4ed12e85",
    measurementId: "G-84RQKQ2JJY"
   });

  export const auth = firebase.auth();

/**GOOGLE AUTH INTEGRATION CODELARI */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
