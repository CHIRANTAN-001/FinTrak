import {firebase} from "./firebase/firebase"

export const handleLogin = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log("User logged in successfully!")
        const user = firebase.auth().currentUser;

        if (user) {
            const uid = user.uid
            const snapshot = await firebase
                .firestore()
                .collection("users")
                // .where('userId', '==', uid)
                .doc(uid)
                .get();

            if (snapshot.exists) {
                const userData = snapshot.data();
                return userData;
            } else {
                console.log("user does not exist")
                return null;
            }
        } else {
            console.log('No user is currently logged in');
            return null;
        }

        // const userData = firebase
        //     .firestore()
        //     .collection("users")
        //     .where('userId', '==', firebase.auth().currentUser.uid)
        //     .get();
        // const user = userData.doc[0].data();
        // console.log("user data: ", user)
        // return user;
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw error;
    }
};