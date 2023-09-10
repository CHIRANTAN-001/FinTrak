import { useUser } from "../../context/UserContext";
import { firebase } from "../firebase/firebase"
import { v4 as uuidv4 } from 'uuid';


const monthNames = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const addExpenseData = async (amount, title, type) => {
    try {

        const positiveAmount = Math.abs(amount);

        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const monthName = monthNames[month];


        if (title.length > 20) {
            throw new Error('Please enter a title with less than 20 characters')
        }

        if (type === 'expense') {
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

            const mostRecentSalary = querySnapshot.docs[0];
            const mostRecentSalaryData = mostRecentSalary.data();
            const remainingBalance = mostRecentSalaryData.remaining_balance || 0;

            console.log("Remaining balance:", remainingBalance);
            console.log("Expense amount:", positiveAmount);

            if (positiveAmount > remainingBalance) {
                throw new Error('Insufficient balance. Your expense amount exceeds your remaining balance.');
            }

            const negativeAmount = -positiveAmount;


            const expenseRef = await firebase.firestore().collection('expense').add({
                // expenseId,
                userId: firebase.auth().currentUser.uid,
                title,
                amount: negativeAmount,
                month: monthName,
                year: year,
                timestamp: currentDateTime.toString(),
                type,
            })

            const newRemainingBalance = remainingBalance + amount;

            await mostRecentSalary.ref.update({ remaining_balance: newRemainingBalance });

            return {
                userId: firebase.auth().currentUser.uid,
                title,
                amount: negativeAmount,
                month: monthName,
                year: year,
                timestamp: currentDateTime.toString(),
                type,
            }

        } else if (type === 'income') {

            const incomeRef = await firebase.firestore().collection('expense').add({
                userId: firebase.auth().currentUser.uid,
                title,
                amount: positiveAmount,
                month: monthName,
                year,
                timestamp: currentDateTime.toString(),
            });

            const salaryCollectionRef = firebase
                .firestore()
                .collection('salary')
                .where('userId', '==', firebase.auth().currentUser.uid)
                .orderBy('timestamp', 'desc')
                .limit(1);

            const querySnapshot = await salaryCollectionRef.get();

            if (!querySnapshot.empty) {
                const mostRecentSalary = querySnapshot.docs[0];
                const mostRecentSalaryData = mostRecentSalary.data();
                const remainingBalance = mostRecentSalaryData.remaining_balance || 0;
                const newRemainingBalance = remainingBalance + positiveAmount;

                await mostRecentSalary.ref.update({ remaining_balance: newRemainingBalance });

                // Return the newRemainingBalance for income
                return {
                    userId: firebase.auth().currentUser.uid,
                    title,
                    amount: positiveAmount,
                    month: monthName,
                    year,
                    timestamp: currentDateTime.toString(),
                    type,
                    newRemainingBalance,
                };
            } else {
                throw new Error('Please add salary data before adding income');
            }

        }
    } catch (error) {
        console.log("error adding expense data: ", error)
        throw error;
    }
}