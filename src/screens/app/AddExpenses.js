import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { addExpenseData } from '../../api/expemse/addExpenseData'
import { useExpense } from '../../context/ExpenseContext'
// import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const AddExpenses = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const {addExpense} = useExpense();

  const handleAddExpense = async () => {
    try {
      const response = await addExpenseData(amount, title);
      console.log("response expense: ", response);
      setAmount('');
      setTitle('');

      addExpense(response);

      navigation.navigate('Home');
    } catch (error) {
      console.log("Error adding expense data: ", error);
      setError(error.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className='flex-1 flex justify-center align-middle px-5' style={{ backgroundColor: '#F6F6F6' }}>
        <View >
          <View className='h-[10%] w-full pt-5 flex justify-center align-middle'>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className='rounded-full'
              style={{
                height: responsiveScreenHeight(8),
                width: responsiveScreenHeight(8),
                backgroundColor: '#1e1e1e',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name='arrowleft' size={35} color='white' />
            </TouchableOpacity>
          </View>
          <View className='h-[25%] w-full ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <View className='pr-20'>
              <Text style={{ fontFamily: 'TTFirsNeue-DemiBold', fontSize: responsiveScreenFontSize(4) }}>Track Expenses Effortlessly!</Text>
              <Text className='pt-2' style={{ fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(2) }}>Use '-' for expenses and positive values for earnings (e.g., '-100' for expenses, '100' for earnings)</Text>

            </View>
          </View>
          <View className='h-[45%] w-full'>

            <View  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View className='pb-5'>
                <MaterialIcons name='description' size={22} style={[AddExpenseStyles.icon]} />
              </View>
              <TextInput
                className='px-14'
                style={[AddExpenseStyles.input]}
                placeholder='Enter expense title (e.g., Food)'
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
            </View>

            <View className='py-5' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View className='pb-5'>
                <FontAwesome5 name='rupee-sign' size={20} style={[AddExpenseStyles.icon]} />
              </View>
              <TextInput
                className='px-14'
                style={[AddExpenseStyles.input]}
                placeholder='Enter amount'
                keyboardType='numeric'
                value={amount}
                onChangeText={(text) => setAmount(text)}
              />
            </View>
            {error ? <Text className='px-5 pt-2' style={{ color: 'red' }}>{error}</Text> : null}


            <TouchableOpacity className='pt-4' onPress={handleAddExpense} >
              <View style={[AddExpenseStyles.inpBtn]}>
                <Text style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(3), color: '#ffffff' }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className='h-[20%] w-full'>

          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default AddExpenses
