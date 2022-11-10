import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider  ,  signInWithPopup} from "firebase/auth"
const FirebaseConfig = {
    apiKey: "AIzaSyAWr8DzvVlAKwrumc0gX6zGlX8-MIAemXY",
    authDomain: "data-base-dd75d.firebaseapp.com",
    projectId: "data-base-dd75d",
    storageBucket: "data-base-dd75d.appspot.com",
    messagingSenderId: "624803887840",
    appId: "1:624803887840:web:05a0aaf5a4711d4ed12e85",
    measurementId: "G-84RQKQ2JJY"
};
   

export  const app  = initializeApp(FirebaseConfig)
export  const auth  = getAuth()

export  const provider = new GoogleAuthProvider()
export  const SigninWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth , provider)

    .catch((err) => {
        console.log(err);
    })
}