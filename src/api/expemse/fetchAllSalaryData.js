import { query } from "firebase/firestore";
import { firebase } from "../firebase/firebase"

export const fetchAllSalaryData = async () => {
    try {
        const userId = firebase.auth().currentUser.uid;

        const salaryCollectionRef = firebase
            .firestore()
            .collection('salary')
            .where('userId', '==', userId)
            .orderBy('timestamp', 'asc')
        
        const querySnapshot = await salaryCollectionRef.get();

        if (querySnapshot.empty) {
            return [];
        } else {
            const salaryData = querySnapshot.docs.map((doc) => doc.data());
            // console.log("fetching all salary data: ", salaryData);
            return salaryData;
        }
    } catch (error) {
        console.log("error fetching all salary data: ", error);
        throw error;
    }
}