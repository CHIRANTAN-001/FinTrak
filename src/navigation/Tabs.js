import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveFontSize,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions'

import {
    GestureHandlerRootView,
} from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/app/HomeScreen'
import AddExpenses from '../screens/app/AddExpenses'
import ExpenseDetailsScreen from '../screens/app/ExpenseDetailsScreen'
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: responsiveScreenHeight(5),
          width: responsiveScreenWidth(100),
          position: "absolute",
          bottom: 0,
          height: responsiveScreenHeight(10),
          borderTopRightRadius: responsiveScreenWidth(8),
          borderTopLeftRadius: responsiveScreenWidth(8),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{
              color: '#1e1e1e',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              {focused ? (
                <Entypo name="home" size={20} color="#000" />
              ): (
                  <Octicons name="home" size={20} color="#000" />
              )}
              <Text>Home</Text>
           </View>
        ),
        }}
        
      />
      <Tab.Screen
        name="Add"
        component={AddExpenses}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View className='pb-3' style={{
              color: '#1e1e1e',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View className='flex-col justify-center items-center' style={{backgroundColor: '#1e1e1e', height: responsiveScreenHeight(6), width: responsiveScreenHeight(6), borderRadius: responsiveScreenWidth(100)}}>
                <Feather name="plus" size={30} color="#ffffff" />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={ExpenseDetailsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{
              color: '#1e1e1e',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {focused ? (
                <Ionicons name="receipt" size={20} color="#000" />
              ): (
                  <Ionicons name="receipt-outline" size={20} color="#000" />
              )}
              <Text>Overview</Text>
            </View>
          ),
        }}
      />
      </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default Tabs
