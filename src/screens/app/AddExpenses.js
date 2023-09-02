import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, Keyboard } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'

const AddExpenses = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 flex justify-center align-middle px-5' style={{ backgroundColor: '#F6F6F6' }}>
        <View >
          <View className='h-[20%] w-full' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
            <View className='pr-32'>
              <Text style={{ fontFamily: 'TTFirsNeue-Medium', fontSize: responsiveScreenFontSize(4) }}>Track Expenses Effortlessly!</Text>
            </View>
          </View>
          <View className='h-[70%] w-full'>
            <TextInput
              style={[AddExpenseStyles.input]}
              placeholder='Enter amount (e.g., -100 for expenses)'
              keyboardType='numeric'
            />
          </View>
          <View className='h-[10%] w-full bg-yellow-500'>

          </View>
        </View>  
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default AddExpenses
