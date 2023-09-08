import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import ListOfAllExpensesByMonth from '../../components/ListOfAllExpensesByMonth'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import {firebase} from "../../api/firebase/firebase"
import { fetchExpensesByMonthAndYear } from '../../api/expemse/fetchExpensesByMonthAndYear'

const MonthlyOverview = ({ navigation }) => {
    
    const route = useRoute();

    const { month, year } = route.params;

    const [expenseData, setExpenseData] = useState([]);

    const fetchExpenses = async () => {
        const userId = firebase.auth().currentUser.uid;
        const expenses = await fetchExpensesByMonthAndYear(userId, month, year)
        setExpenseData(expenses);
    }

    useFocusEffect(
        useCallback(() => {
            fetchExpenses();
        },[])
    )

    return (
        <SafeAreaView className='flex flex-1 justify-center align-middle px-5' style={{ backgroundColor: '#F6F6F6' }}>
            <View>
                <View className='h-[10%] w-full pt-5 '>
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
                <View className='h-[15%] w-full ' style={{justifyContent: 'center'}}>
                    <Text style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(4) }}>Expense in {month}, {year}</Text>
                </View>
                <View className='h-[75%] w-full '>
                    <FlatList
                        data={expenseData}
                        keyExtractor={(item) => item.expenseId}
                        renderItem={({ item }) => (
                            <ListOfAllExpensesByMonth
                                title={item.title}
                                date={item.timestamp}
                                amount={item.amount}
                            />
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default MonthlyOverview