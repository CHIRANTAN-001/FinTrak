import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, FlatList } from 'react-native'
import { data } from '../other/sampleData'
import ListOfExpenses from '../../components/ListOfExpenses'

const ExpenseDetailsScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView className='flex-1 flex justify-center align-middle' style={{ backgroundColor: '#F6F6F6' }}>
        <View className='h-[20%] w-full bg-red-600'>

        </View>

        <View className='h-[70%] w-full'>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListOfExpenses
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            )}
          />
        </View>

        <View className='h-[10%] w-full'>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ExpenseDetailsScreen