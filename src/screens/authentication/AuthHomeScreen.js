// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import React, { useEffect } from 'react'
import { Text, Keyboard, SafeAreaView, TouchableWithoutFeedback, View, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// --------------------------------------------------------------------
// SVG COMPONENTS
// --------------------------------------------------------------------
import LoginSvg from '../../assests/svg/LoginSvg'

// --------------------------------------------------------------------
// STYLE
// --------------------------------------------------------------------
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'


const AuthHomeScreen = () => {

  const navigation = useNavigation();

  // const handleSubmit = () => {
  //   navigation.navigate("LoginScreen")
  //   console.log('pressed')
  // }

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView className='flex flex-1 justify-center align-middle'>
        
        <View className='h-[40%] w-full pt-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoginSvg />
        </View>

        <View className='h-[60%] w-full ' style={{ display: 'flex',  alignItems: 'center' }}>
          
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} className='pt-20' >
            <View style={[AddExpenseStyles.inpBtn]}>
              <Text style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(3), color: '#ffffff' }}>Login</Text>
            </View>
          </TouchableOpacity>
          
          <Text className='py-5' style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(3) }}>OR</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")} className='' >
            <View style={[AddExpenseStyles.inpBtn]}>
              <Text style={{ fontFamily: 'TTFirsNeue-Bold', fontSize: responsiveScreenFontSize(3), color: '#ffffff' }}>Signup</Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text>Hello</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default AuthHomeScreen
