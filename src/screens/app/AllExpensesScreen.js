// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import ListOfOverview from '../../components/ListOfOverview'
import { overviewListStyle } from '../../assests/styles/componentStyles/overviewListStyle'

// --------------------------------------------------------------------
// BACKEND FUNCTIONS
// --------------------------------------------------------------------
import { fetchAllSalaryData } from '../../api/expemse/fetchAllSalaryData'


const AllExpensesScreen = ({navigation}) => {

  const [salaryData, setSalaryData] = useState([]);
  const [overviewData, setOverviewData] = useState([]);

  const fetchSalaryData = async () => {
    const response = await fetchAllSalaryData();
    setSalaryData(response);
  }

  useFocusEffect(
    useCallback(() => {
      fetchSalaryData();
    }, [])
  );


  return (
    <View className='flex flex-1 justify-center align-middle px-5'>
      <View className='h-[15%] w-full flex justify-center align-middle'>
        <Text style={[overviewListStyle.heading]}>Overview of Expenses</Text>
      </View> 
      <View className='h-[75%] w-full'>
        {/* <ListOfOverview expensesData={expensesData} /> */}
        <FlatList
          data={salaryData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListOfOverview
              month={item.month}
              year={item.year}
              totalBalance={item.total_balance}
              remainingBalance={item.remaining_balance}
              // totalAmount={item.totalAmount}
              // spentAmount={item.spentAmount}
            />
          )}
        />
      </View>
      <View className='h-[10%] w-full bg-red-400'>

      </View>
    </View>
  )
}

export default AllExpensesScreen