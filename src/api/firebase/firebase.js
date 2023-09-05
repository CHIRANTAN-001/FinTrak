// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Q-gvh8k1P4-8MYKHGHrnEikXzzXrvfc",
    authDomain: "fintrak-adb36.firebaseapp.com",
    projectId: "fintrak-adb36",
    storageBucket: "fintrak-adb36.appspot.com",
    messagingSenderId: "884526987812",
    appId: "1:884526987812:web:30385186b39c9f0f4276b1"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export {firebase}