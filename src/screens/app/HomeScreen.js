import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveHeight, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { HomeStyle } from '../../assests/styles/componentStyles/HomeStyle';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ListOfExpenses from '../../components/ListOfExpenses';
import { data } from '../other/sampleData';

const HomeScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className='flex-1 flex justify-center align-middle' style={{backgroundColor: '#F6F6F6' }}>
                <View className='h-[10%] w-full' >
                    <View className='flex-row justify-between px-5 pt-5'>
                        <View className='flex-row pt-3'>
                            <Text style={[HomeStyle.hello]}>Hello, </Text>
                            <Text style={[HomeStyle.name]}>Chirantan</Text>
                        </View>
                        <View>
                            <Image className='rounded-full' style={{ height: responsiveScreenHeight(6), width: responsiveScreenHeight(6) }} source={require('../../assests/image/user.webp')}/>                           
                        </View>
                    </View>
                </View>
                <View className='h-[35%] w-full px-3 ' >
                    <View className='px-7 flex-1 justify-evenly align-middle' style={[HomeStyle.expenseDetails]}>
                        
                        {/* account details */}
                        <View className='flex-row justify-between'>
                            <View>
                                <Text style={[HomeStyle.salary]}>₹5000</Text>
                                <Text style={{ color: '#8a8b8b', fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(2) }}>Balance</Text>
                            </View>
                            <View>
                                <Text style={[HomeStyle.month]}>Aug</Text>
                            </View>
                        </View>
                        
                        <View className='pt-5'>
                            <Text style={{ color: '#FFD700', fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(2.5), letterSpacing: responsiveScreenWidth(1.5) }}>**** **** **** 1234</Text>
                        </View>
                        

                        <View className=''>
                            <View className='flex-row justify-between'>
                                <View className='flex-col'>
                                    <Text style={{ fontFamily: 'TTFirsNeue-Regular', color: '#8a8b8b', fontSize: responsiveScreenFontSize(2) }}>Name</Text>
                                    <Text style={{ fontFamily:'TTFirsNeue-Regular', color: '#f6f6f6', fontSize: responsiveScreenFontSize(2.5) }}>Chirantan</Text>
                                </View>
                                <View className='pt-2'> 
                                    <TouchableOpacity>
                                        <Entypo name='plus' size={30} color='#FFD700' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                   
                    <View className='px-1 py-5'>
                        <Text style={{ fontFamily: 'TTFirsNeue-DemiBold', fontSize: responsiveScreenFontSize(2.5)}}>Transactions</Text>
                    </View>
                </View>

                {/* Transaction List */}
                <View className='h-[45%] w-full px-5' style={{}}>
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

export default HomeScreen
