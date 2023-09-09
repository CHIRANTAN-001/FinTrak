import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveHeight, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { HomeStyle } from '../../assests/styles/componentStyles/HomeStyle';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ListOfExpenses from '../../components/ListOfExpenses';
import { data } from '../other/sampleData';
import { fetchCurrentUser } from '../../api/fetchCurrentUser';
import { auth, db } from '../../api/firebase/firebase';
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import Feather from 'react-native-vector-icons/Feather';
import { handleSignOut } from '../../api/handleSignout';
import { firebase } from "../../api/firebase/firebase"
import { useUser } from '../../context/UserContext';
import { fetchRecentSalary } from '../../api/expemse/fetchRecentSalary';
import { calculateTotalExpensePerMonth } from '../../api/expemse/calculateTotalExpensePerMonth';
import { fetchExpenseData } from '../../api/expemse/fetchExpenseData';
import { useExpense } from '../../context/ExpenseContext';

const HomeScreen = ({ route, navigation }) => {


    const [salaryData, setSalaryData] = useState(null);
    const [expenseData, setExpenseData] = useState([]);
    const [currentMonth, setCurrentMonth] = useState('');

    const { user, setUser } = useUser();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const getCurrentMonth = () => {
        const currentDate = new Date();
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return months[currentDate.getMonth()];
    };

    const checkSalaryForCurrentMonth = () => {
        const month = getCurrentMonth();
        setCurrentMonth(month);
    };

    useFocusEffect(
        useCallback(() => {
            checkSalaryForCurrentMonth();
        }, [])
    );

    useEffect(() => {
        const fetchSalaryData = async () => {
            try {
                

                // Handle the passed parameter for updated salary data
                // console.log("route params: ", salaryData);
                if (route.params?.updatedSalaryData) {
                    setSalaryData(route.params.updatedSalaryData);
                }
                else {
                    const salaryData = await fetchRecentSalary();
                    setSalaryData(salaryData);
                }
            } catch (error) {
                console.error("Error fetching salary data:", error);
            }
        }

        // Fetch salary data when HomeScreen is focused
        const unsubscribe = navigation.addListener('focus', () => {
            fetchSalaryData();
        });

        return () => unsubscribe();
    }, [route.params, navigation]);

    useEffect(() => { 
        const fetchAllExpenseData = async () => { 
            try {
                const expenses = await fetchExpenseData();
                setExpenseData(expenses);
            } catch (error) {
                console.log("Error fetching expense data: ", error);
            }
        }

        const unsubscribe = navigation.addListener('focus', () => { 
            fetchAllExpenseData();
        })

        return () => unsubscribe();
    },[navigation])



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView className='flex-1 flex justify-center align-middle' style={{ backgroundColor: '#F6F6F6' }}>
                <View className='h-[10%] w-full' >
                    <View className='flex-row justify-between px-5 pt-5'>
                        <View className='flex-row pt-3'>
                            <Text style={[HomeStyle.hello]}>Hello, </Text>
                            <Text style={[HomeStyle.name]}>{capitalizeFirstLetter(user?.name.split(' ')[0] || "")}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                firebase.auth().signOut();
                                setUser(null);
                                navigation.navigate('AuthHomeScreen');
                            }}
                        >
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e', height: responsiveScreenHeight(5), width: responsiveScreenHeight(5), borderRadius: responsiveScreenWidth(3) }}>
                                <Feather name='log-out' size={25} color='white' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='h-[35%] w-full px-3 ' >
                    <View className='px-7 flex-1 justify-evenly align-middle' style={[HomeStyle.expenseDetails]}>

                        {/* account details */}
                        <View className='flex-row justify-between'>
                            <View>
                                <Text style={[HomeStyle.salary]}>₹{salaryData?.total_balance || 'Add Salary'}</Text>
                                <Text style={{ color: '#8a8b8b', fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(1.7) }}>Total Balance</Text>
                            </View>
                            <View className='pt-2'>
                                <Text style={[HomeStyle.month]}>{salaryData?.month || 'M'}, {salaryData?.year || 'Y'}</Text>
                            </View>
                        </View>

                        {/* <View className='pt-5'>
                            <Text style={{ color: '#FFD700', fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(2.5), letterSpacing: responsiveScreenWidth(1.5) }}>**** **** **** 1234</Text>
                        </View> */}


                        <View className=''>
                            <View className='flex-row justify-between'>
                                <View className='flex-col'>
                                    <Text style={[HomeStyle.salary]}>₹{salaryData?.remaining_balance || '0'}</Text>
                                    <Text style={{ color: '#8a8b8b', fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(1.7) }}>Remaining Balance</Text>
                                </View>
                                <View className='pt-2'>
                                    {salaryData?.length === 0 || salaryData?.month !== currentMonth ? (
                                        <TouchableOpacity onPress={() => navigation.navigate("AddSalaryScreen")}>
                                            <Entypo name='plus' size={30} color='#FFD700' />
                                        </TouchableOpacity>
                                    ) : (
                                        <Text></Text>
                                    )}

                                </View>
                            </View>
                        </View>
                    </View>

                    <View className='px-1 py-5'>
                        <Text style={{ fontFamily: 'TTFirsNeue-DemiBold', fontSize: responsiveScreenFontSize(2.5) }}>Transactions</Text>
                    </View>
                </View>

                {/* Transaction List */}
                <View className='h-[45%] w-full px-5' style={{}}>
                    <FlatList
                        data={expenseData}
                        keyExtractor={(item) => item.expenseId}
                        renderItem={({ item }) => (
                            <ListOfExpenses
                                title={item.title}
                                date={item.timestamp}
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
