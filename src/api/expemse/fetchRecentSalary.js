import { firebase } from "../firebase/firebase";

export const fetchRecentSalary = async() => {
    try {
        const salaryCollectionRef = firebase.firestore()
            .collection('salary')
            .where('userId', '==', firebase.auth().currentUser.uid)
            .orderBy('timestamp', 'desc')
            .limit(1);

        const querySnapshot = await salaryCollectionRef.get();

        if (querySnapshot.empty) {
            return null;
        } else {
            const mostRecentData = querySnapshot.docs[0].data();
            // console.log("most recent data: ", mostRecentData);
            return mostRecentData;
        }


    } catch (error) {
        console.log("error fetching recent salary data: ", error);
        throw error;
    }
};
