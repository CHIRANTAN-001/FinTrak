// import { FirebaseAuthTypes } from "@react-native-firebase/auth";
// import auth from '@react-native-firebase/auth';
import { firebase } from "./firebase/firebase"
// import 

export const handleSignup = async (displayName, email, password, navigation) => { 
    try {

        const signInMethods = await firebase.auth().fetchSignInMethodsForEmail(email);

        if (signInMethods.length > 0) { 
            alert('User with this email address already exists.');
            return;
        }

        await firebase.auth().createUserWithEmailAndPassword(
            email,
            password,
        )

        const user = firebase.auth().currentUser;
        const userId = user.uid;
        console.log("User ID:", userId);

        await user.sendEmailVerification()

        alert("Verification email sent. After verifying log in to your account");

        await firebase.auth().signOut();

        await firebase.firestore().collection("users").doc(userId).set({
            name: displayName,
            email,
            userId: userId
        })
        console.log('User account created successfully!');

        navigation.navigate('LoginScreen')
    } catch (error) {
        console.log(error)
    }
}