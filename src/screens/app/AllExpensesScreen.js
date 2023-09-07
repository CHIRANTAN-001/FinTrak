import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { listStyle } from '../../assests/styles/componentStyles/listStyle'
import ListOfOverview from '../../components/ListOfOverview'
import { overviewListStyle } from '../../assests/styles/componentStyles/overviewListStyle'
import {firebase} from "../../api/firebase/firebase"


const AllExpensesScreen = () => {

  const [expenseData, setExpenseData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);

  // useEffect(() => {
  //   const userId = firebase.auth().currentUser.uid;

  //   const expenseCollectionRef = firebase
  //     .firestore()
  //     .collection('expense')
  //     .where('userId', '==', userId)
  //     .orderBy('year', 'desc')
  //     .orderBy('month', 'desc');

  //   const unsubscribe = expenseCollectionRef.onSnapshot((querySnapshot) => {
  //     const expenses = querySnapshot.docs.map((doc) => doc.data());

  //     const salaryCollectionRef = firebase
  //       .firestore()
  //       .collection('salary')
  //       .where('userId', '==', userId)
  //       .orderBy('year', 'desc')
  //       .orderBy('month', 'desc');

  //     salaryCollectionRef.onSnapshot((querySnapshot) => {
  //       const salaries = querySnapshot.docs.map((doc) => doc.data());

  //       // Create a dictionary to accumulate expenses for each month
  //       const monthExpenses = {};

  //       // Loop through expenses and accumulate them by month
  //       expenses.forEach((expense) => {
  //         const key = `${expense.year}-${expense.month}`;
  //         if (!monthExpenses[key]) {
  //           monthExpenses[key] = {
  //             totalBalance: 0,
  //             remainingBalance: 0,
  //             date: `${expense.month}, ${expense.year}`,
  //           };
  //         }
  //         monthExpenses[key].totalBalance += parseFloat(expense.amount);
  //       });

  //       // Calculate remaining balances for each month
  //       for (const key in monthExpenses) {
  //         const monthExpense = monthExpenses[key];
  //         const matchingSalary = salaries.find(
  //           (salary) =>
  //             salary.year === Number(monthExpense.date.split(',')[1]) &&
  //             salary.month === monthExpense.date.split(',')[0]
  //         );
  //         if (matchingSalary) {
  //           monthExpense.remainingBalance =
  //             matchingSalary.total_balance + monthExpense.totalBalance;
  //         }
  //       }

  //       // Convert the dictionary into an array of objects
  //       const overviewData = Object.values(monthExpenses);

  //       // Calculate total and spent amounts
  //       overviewData.forEach((monthData) => {
  //         monthData.spentAmount = -monthData.totalBalance;
  //         monthData.totalAmount = monthData.remainingBalance - monthData.spentAmount;
  //       });

  //       setOverviewData(overviewData);
  //     });
  //   });

  //   return () => {
  //     if (unsubscribe) {
  //       unsubscribe();
  //     }
  //   };
  // }, []);


  return (
    <View className='flex flex-1 justify-center align-middle px-5'>
      <View className='h-[15%] w-full flex justify-center align-middle'>
        <Text style={[overviewListStyle.heading]}>Overview of Expenses</Text>
      </View> 
      <View className='h-[75%] w-full'>
        {/* <ListOfOverview expensesData={expensesData} /> */}
        {/* <FlatList
          data={overviewData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListOfOverview
              date={item.date}
              totalBalance={item.totalBalance}
              remainingBalance={item.remainingBalance}
              totalAmount={item.totalAmount}
              spentAmount={item.spentAmount}
            />
          )}
        /> */}
      </View>
      <View className='h-[10%] w-full bg-red-400'>

      </View>
    </View>
  )
}

export default AllExpensesScreen