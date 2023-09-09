import { View } from 'lucide-react-native'
import React from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { StyleSheet } from 'react-native'
const LoadingScreen = () => {
    return (
        <View className='pl-20' style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={responsiveScreenFontSize(8)} color="#0000ff" />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
        // flexDirection: 'col',
        justifyContent: 'space-around',
    },
});