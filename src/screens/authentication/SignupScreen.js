import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { responsiveScreenFontSize, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { AddExpenseStyles } from '../../assests/styles/componentStyles/AddExpenseStyles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

import { handleSignup } from '../../api/handleSignup'


const SignupScreen = ({ navigation }) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [displayNameError, setDisplayNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSignupPress = async () => {

        setDisplayNameError('');
        setEmailError('');
        setPasswordError('');

        // Validate displayName
        if (displayName.length < 3) {
            setDisplayNameError('Name is too short');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return;
        }

        // Validate password
        if (password.length < 6 || password.length > 20) {
            setPasswordError('Password must be 6-20 characters');
            return;
        }

        await handleSignup(displayName, email, password, navigation);

        setDisplayName('');
        setEmail('');
        setPassword('');
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
                            <Text style={{ fontFamily: 'TTFirsNeue-DemiBold', fontSize: responsiveScreenFontSize(6) }}>Sign Up</Text>
                            <Text style={{ fontFamily: 'TTFirsNeue-Regular', fontSize: responsiveScreenFontSize(2.5) }}>Sign up for an effortless expense tracker</Text>
                        </View>
                    </View>
                    <View className='h-[40%] w-full pt-5'>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View className='pb-5'>
                                <Feather name='user' size={20} style={[AddExpenseStyles.icon]} />
                            </View>
                            <TextInput
                                className='px-14'
                                style={[AddExpenseStyles.input]}
                                placeholder='Enter your name'
                                keyboardType='default'
                                value={displayName}
                                onChangeText={(displayName) => setDisplayName(displayName)}
                            />
                        </View>
                        {displayNameError ? <Text className='px-5 pt-2' style={{ color: 'red', fontFamily: 'TTFirsNeue-Reagular' }}>{displayNameError}</Text> : null}

                        <View className='py-5' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View className='pb-5'>
                                <MaterialIcons name='alternate-email' size={20} style={[AddExpenseStyles.icon]} />
                            </View>
                            <TextInput
                                className='px-14'
                                style={[AddExpenseStyles.input]}
                                placeholder='Enter your mail id'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        {emailError ? <Text className='px-5 pt-2' style={{ color: 'red', fontFamily: 'TTFirsNeue-Reagular' }}>{emailError}</Text> : null}

                        <View className='pb-5' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View className='pb-5'>
                                <Feather name='lock' size={20} style={[AddExpenseStyles.icon]} />
                            </View>
                            <TextInput
                                className='px-14'
                                style={[AddExpenseStyles.input]}
                                placeholder='Enter your password'
                                keyboardType='default'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                            />
                        </View>
                        {passwordError ? <Text className='px-5 pt-2' style={{ color: 'red', fontFamily: 'TTFirsNeue-Reagular' }}>{passwordError}</Text> : null}


                        <TouchableOpacity className='pt-4' onPress={handleSignupPress}>
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

export default SignupScreen
