import { firebase } from "../firebase/firebase"

const monthNames = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const fetchExpenseData = async () => {
    try {

        const currentDateTime = new Date();
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const monthName = monthNames[month];

        const expenseCollection = await firebase
            .firestore()
            .collection('expense')
            .where("userId", '==', firebase.auth().currentUser.uid)
            .where("month", '==', monthName)
            .where("year", '==', year)
            .get();

        const expenseData = expenseCollection.docs.map((doc) => doc.data());
        // console.log(expenseData)
        return expenseData;

    } catch (error) {
        console.log("error calculating total expense per month: ", error)
        throw error;
    }
}