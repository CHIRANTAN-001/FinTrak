import { firebase } from "../firebase/firebase"

export const calculateTotalExpensePerMonth = async () => {
    try {
        const expenseCollection = await firebase
            .firestore()
            .collection('expense')
            .where("userId", '==', firebase.auth().currentUser.uid)
            .get();
        
        let totalExpense = 0;

        expenseCollection.forEach((doc) => { 
            const expenseData = doc.data();
            totalExpense += expenseData.amount;
        })

        return totalExpense;

    } catch (error) {
        console.log("error calculating total expense per month: ", error)
        throw error;
    }
}