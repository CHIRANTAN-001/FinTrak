import { useUser } from "../../context/UserContext";
import { firebase } from "../firebase/firebase"

const monthNames = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const addExpenseData = async (amount, title) => {
    try {
        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const monthName = monthNames[month];
        

        if (title.length > 20) {
            throw new Error('Please enter a title with less than 20 characters')
        }

        const numericAmount = parseFloat(amount);

        const expenseRef = await firebase.firestore().collection('expense').add({
            userId: firebase.auth().currentUser.uid,
            title,
            amount: numericAmount,
            month: monthName,
            year: year,
            timestamp: currentDateTime.toString(),
        })

        return {
            userId: firebase.auth().currentUser.uid,
            title,
            amount: numericAmount,
            month: monthName,
            year: year,
            timestamp: currentDateTime.toString(),
        }
    } catch (error) {
        console.log("error adding expense data: ", error)
        throw error;
    }
}