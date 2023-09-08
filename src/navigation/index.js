import * as React from 'react'
import { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import AuthHomeScreen from '../screens/authentication/AuthHomeScreen'
import LoginScreen from '../screens/authentication/LoginScreen'
import SignupScreen from '../screens/authentication/SignupScreen'
import AddSalaryScreen from '../screens/app/AddSalaryScreen'

import Tabs from './Tabs'
import { firebase } from "../api/firebase/firebase"
import AsyncStorage from '@react-native-async-storage/async-storage'
import MonthlyOverview from '../screens/app/MonthlyOverview'
import ListOfOverview from '../components/ListOfOverview'
import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';
import ListOfAllExpensesByMonth from '../components/ListOfAllExpensesByMonth'


const Stack = createNativeStackNavigator()

export function AppNavigation() {

    enableExperimentalWebImplementation(true);

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);


    if (initializing) return null;

    if (!user) {
        return (
            // <NavigationContainer>
            <Stack.Navigator initialRouteName='AuthHomeScreen'>
                <Stack.Screen
                    name='AuthHomeScreen'
                    component={AuthHomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SignupScreen'
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />


            </Stack.Navigator>
            // </NavigationContainer>
        )
    }

    return (
        // <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
                name='AuthHomeScreen'
                component={AuthHomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SignupScreen'
                component={SignupScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='HomeScreen'
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddSalaryScreen"
                component={AddSalaryScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ListOfOverview'
                component={ListOfOverview}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MonthlyOverview'
                component={MonthlyOverview}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ListOfAllExpensesByMonth'
                component={ListOfAllExpensesByMonth}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

