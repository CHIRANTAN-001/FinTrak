// --------------------------------------------------------------------
// BACK END API CALLS FOR FETCHING EXPENSES BY MONTH AND YEAR
// --------------------------------------------------------------------
import { firebase } from "../firebase/firebase";

export const fetchExpensesByMonthAndYear = async (userId, month, year) => {
    try {
        const expensesCollectionRef = firebase.firestore()
            .collection('expense')
            .where('userId', '==', userId)
            .where('month', '==', month)
            .where('year', '==', year)
            .orderBy('timestamp', 'desc');

        const querySnapshot = await expensesCollectionRef.get();

        if (querySnapshot.empty) {
            return [];
        } else {
            const expenseData = querySnapshot.docs.map((doc) => doc.data());
            // console.log("expense data: ", expenseData);
            return expenseData;
        }
    } catch (error) {
        console.log("error fetching expenses by month and year: ", error);
        throw error;
    }
};
