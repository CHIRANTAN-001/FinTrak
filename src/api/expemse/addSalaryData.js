import { useUser } from "../../context/UserContext";
import { firebase } from "../firebase/firebase"

const monthNames = [
    "", "Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"    
];

export const addSalaryData = async (salary) => {
    try {
        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const monthName = monthNames[month];

        const parsedSalary = parseFloat(salary);
        if (isNaN(parsedSalary) || parsedSalary <= 0) {
            throw new Error('Please enter a valid positive salary');
        }

        const salaryRef = await firebase.firestore().collection('salary').add({
            userId: firebase.auth().currentUser.uid,
            total_balance: parsedSalary,
            remaining_balance: parsedSalary,
            month: monthName,
            year: year,
            timestamp: currentDateTime.toString(),
        })

        return {
            userId: firebase.auth().currentUser.uid,
            total_balance: parsedSalary,
            remaining_balance: parsedSalary,
            month: monthName,
            year: year,
            timstamp: currentDateTime.toString(),
        }
    } catch (error) {
        console.log("error adding salary data: ", error)
        throw error;
    }
}