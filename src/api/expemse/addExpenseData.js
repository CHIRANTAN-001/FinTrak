import { useUser } from "../../context/UserContext";
import { firebase } from "../firebase/firebase"
import { v4 as uuidv4 } from 'uuid';


const monthNames = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const addExpenseData = async (amount, title, type) => {
    try {
        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const monthName = monthNames[month];
        

        if (title.length > 20) {
            throw new Error('Please enter a title with less than 20 characters')
        }

        const salaryCollectionRef = firebase
            .firestore()
            .collection('salary')
            .where('userId', '==', firebase.auth().currentUser.uid)
            .orderBy('timestamp', 'desc')
            .limit(1)
        
        const querySnapshot = await salaryCollectionRef.get();

        if (querySnapshot.empty) {
            throw new Error('Please add salary data before adding expenses');
        }

        const expenseRef = await firebase.firestore().collection('expense').add({
            // expenseId,
            userId: firebase.auth().currentUser.uid,
            title,
            amount,
            month: monthName,
            year: year,
            timestamp: currentDateTime.toString(),
            type,
        })

        const mostRecentSalary = querySnapshot.docs[0];
        const mostRecentSalaryData = mostRecentSalary.data();
        const remainingBalance = mostRecentSalaryData.remaining_balance || 0;
        const newRemainingBalance = remainingBalance + amount;

        await mostRecentSalary.ref.update({ remaining_balance: newRemainingBalance });

        return {
            userId: firebase.auth().currentUser.uid,
            title,
            amount,
            month: monthName,
            year: year,
            timestamp: currentDateTime.toString(),
            type,
        }
    } catch (error) {
        console.log("error adding expense data: ", error)
        throw error;
    }
}