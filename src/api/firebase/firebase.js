// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD0Q-gvh8k1P4-8MYKHGHrnEikXzzXrvfc",
//     authDomain: "fintrak-adb36.firebaseapp.com",
//     projectId: "fintrak-adb36",
//     storageBucket: "fintrak-adb36.appspot.com",
//     messagingSenderId: "884526987812",
//     appId: "1:884526987812:web:30385186b39c9f0f4276b1"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyBpnMd0oTZvHfhvvOx89cZxSBDCaJsLDmg",
//     authDomain: "fintrak2-0.firebaseapp.com",
//     projectId: "fintrak2-0",
//     storageBucket: "fintrak2-0.appspot.com",
//     messagingSenderId: "359824203970",
//     appId: "1:359824203970:web:4fc6d671e2ec5def75db5b"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDxSwOFkX4Hy6HmhkkeUVRU64YpF7Eu71M",
    authDomain: "fintrak3-0.firebaseapp.com",
    projectId: "fintrak3-0",
    storageBucket: "fintrak3-0.appspot.com",
    messagingSenderId: "951648305334",
    appId: "1:951648305334:web:546504a8fa2eeeb20e6617"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export {firebase}