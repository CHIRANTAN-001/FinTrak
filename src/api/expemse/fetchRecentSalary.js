// import { firebase } from "../firebase/firebase"
// import firestore from '@react-native-firebase/firestore';

// export const fetchRecentSalary = async () => {
//     try {
//         const querySnapShot = await firebase.firestore()
//             .collection('salary')
//             .where('userId', '==', firebase.auth().currentUser.uid)
//             .orderBy('timestamp', 'desc')
//             .limit(1)
//             .get();
        
//         if(querySnapShot.empty) {
//             return null;
//         } else {
//             const mostRecentData = querySnapShot.docs[0].data();
//             console.log("most recent data: ", mostRecentData);
//             return mostRecentData;
//         }

        
//     } catch (error) {
//         console.log("error fetching recent salary data: ", error)
//         throw error;
//     }
// }

import { firebase } from "../firebase/firebase";

export const fetchRecentSalary = (updateCallback) => {
    try {
        const salaryCollectionRef = firebase.firestore()
            .collection('salary')
            .where('userId', '==', firebase.auth().currentUser.uid)
            .orderBy('timestamp', 'desc')
            .limit(1);

        const unsubscribe = salaryCollectionRef.onSnapshot((querySnapshot) => {
            if (querySnapshot.empty) {
                updateCallback(null); 
            } else {
                const mostRecentData = querySnapshot.docs[0].data();
                console.log("most recent data: ", mostRecentData);
                updateCallback(mostRecentData); 
            }
        });

        return unsubscribe; 
    } catch (error) {
        console.log("error fetching recent salary data: ", error);
        throw error;
    }
};
