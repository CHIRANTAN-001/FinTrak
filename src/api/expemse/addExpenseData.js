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