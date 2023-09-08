import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { addExpenseData } from '../../api/expemse/addExpenseData'
import { useExpense } from '../../context/ExpenseContext'
import { SelectList } from 'react-native-dropdown-select-list'
import { Dropdown } from 'react-native-element-dropdown'
// import { v4 as uuidv4 } from 'uuid';

const data = [
  { label: 'Expense', value: 'expense' },
  { label: 'Income', value: 'income' },
]


const AddExpenses = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const [selectedValue, setSelectedValue] = useState("Expense");
  
  // console.log("selected value: ", selectedValue);

  const {addExpense} = useExpense();

  const handleAddExpense = async () => {
    if (!title || !amount || !selectedValue) {
      setError('Please fill in all fields.');
      return;
    }

    try {

      const type = selectedValue.toLowerCase();
      const numericAmount = type === 'expense' ? -parseFloat(amount) : parseFloat(amount);
      // const expenseId = uuidv4();


      const response = await addExpenseData(
        // expenseId,
        numericAmount,
        title,
        type
      );

      setAmount('');
      setTitle('');
      setError('');
      // console.log("response expense: ", response);
      

      // addExpense(response);

      navigation.navigate('Home', {updatedExpenseData: response});
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
                required
              />
            </View>

            <View className='pt-5' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                required
              />
            </View>
            {error ? <Text className='px-5' style={{ color: 'red' }}>{error}</Text> : null}

            <View className='py-5' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Dropdown
                className='px-5'
                style={AddExpenseStyles.dropdown}
                placeholderStyle={AddExpenseStyles.placeholderStyle}
                selectedTextStyle={AddExpenseStyles.selectedTextStyle}
                data={data}
                placeholder={selectedValue}
                value={selectedValue}
                onChange={(item) => {
                  setSelectedValue(item.label);
                }}
                
                renderItem={(item, index, isSelected) => (
                  <View className='px-5' key={item.key} style={{ backgroundColor: isSelected ? '#1e1e1e' : 'transparent' }}>
                    <Text className='py-5' style={{ fontSize: responsiveScreenFontSize(1.5), fontFamily: 'TTFirsNeue-Regular', color: isSelected ? '#ffffff' : '#1e1e1e' }}>
                      {item.label}
                    </Text>
                  </View>
                )}
              />
            </View>
            
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
