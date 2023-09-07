import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { addSalaryData } from '../../api/expemse/addSalaryData'

const AddSalaryScreen = ({ navigation }) => {

    const [salary, setSalary] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const salaryData = await addSalaryData(salary);

            navigation.navigate('HomeScreen', { salaryData: salaryData });
            setSalary('');

            console.log("Salary Data added successfully: ",salaryData);
        } catch (error) {
            console.log("Error adding salary data: ", error);
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
                    <View className='h-[20%] w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <View className='pr-20'>
                            <Text style={{ fontFamily: 'TTFirsNeue-DemiBold', fontSize: responsiveScreenFontSize(4) }}>Establish Your Budget!</Text>
                        </View>
                    </View>
                    <View className='h-[40%] w-full'>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View className='pb-5'>
                                <FontAwesome5 name='rupee-sign' size={20} style={[AddExpenseStyles.icon]} />
                            </View>
                            <TextInput
                                className='px-14'
                                style={[AddExpenseStyles.input]}
                                placeholder='Enter your budget (e.g., 5000)'
                                keyboardType='numeric'
                                value={salary}
                                onChangeText={(text) => setSalary(text)}
                            />
                        </View>
                        {error ? <Text className='px-5 pt-2' style={{ color: 'red' }}>{error}</Text> : null}

                        <TouchableOpacity
                            className='pt-4'
                            onPress={handleSubmit}
                        >
                            <View style={[AddExpenseStyles.inpBtn]}>
                                <Text style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(3), color: '#ffffff' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className='h-[30%] w-full'>

                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default AddSalaryScreen
