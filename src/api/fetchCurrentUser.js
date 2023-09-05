import { firebase } from "./firebase/firebase"

export const fetchCurrentUser = async () => {
    try {
        const user = firebase.auth().currentUser;

        if (user) {
            const uid = user.uid
            const snapshot = await firebase
                .firestore()
                .collection("users")
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
            return null; // Return null when no user is logged in
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}