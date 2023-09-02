import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export const listStyle = StyleSheet.create({
    date: {
        fontFamily: 'TTFirsNeue-Light',
        fontSize: responsiveScreenFontSize(1.5),
        color: '#c0c0c0',
    },
    expense: {
        height: responsiveScreenHeight(10),
        backgroundColor: '#ffffff',
        borderRadius: responsiveScreenWidth(5),
        // borderColor: '#000618',
        // borderWidth: responsiveScreenWidth(0.1),
        // elevation: 3
    },
    title: {
        fontFamily: 'TTFirsNeue-Medium',
        color: '#151515',
        fontSize: responsiveScreenFontSize(2.5),
    },
    amount: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2),
        color: '#1e6953',
    }
})