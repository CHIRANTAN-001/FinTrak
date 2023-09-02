import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/app/HomeScreen'
import AddExpenses from '../screens/app/AddExpenses'
import AllExpensesScreen from '../screens/app/AllExpensesScreen'
import EditExpenses from '../screens/app/EditExpenses'
import ExpenseDetailsScreen from '../screens/app/ExpenseDetailsScreen'
import AuthHomeScreen from '../screens/authentication/AuthHomeScreen'
import LoginScreen from '../screens/authentication/AuthHomeScreen'
import SignupScreen from '../screens/authentication/AuthHomeScreen'

import Tabs from './Tabs'

const Stack = createNativeStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name='HomeScreen'
                    component={Tabs}
                    options={{headerShown: false}}
                />
                {/* <Stack.Screen
                    name='AddExpenses'
                    component={AddExpenses}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name='AllExpensesScreen'
                    component={AllExpensesScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='EditExpenses'
                    component={EditExpenses}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name='ExpenseDetailsScreen'
                    component={ExpenseDetailsScreen}
                    options={{ headerShown: false }}
                /> */}
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
        </NavigationContainer>
    )
}
