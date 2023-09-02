import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export const HomeStyle = StyleSheet.create({
    hello: {
        fontFamily: 'TTFirsNeue-Light',
        fontSize: responsiveScreenFontSize(3),
        color: '#000618'
    },
    name: {
        fontFamily: 'TTFirsNeue-DemiBold',
        fontSize: responsiveScreenFontSize(3),
        color: '#000618'
    },
    expenseDetails: {
        height: responsiveScreenHeight(25),
        backgroundColor: '#292d32',
        borderRadius: responsiveScreenWidth(5),
        elevation: 5
    },
    month: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2),
        color: '#ffffff',
    },
    salary: {
        fontFamily: 'TTFirsNeue-DemiBold',
        fontSize: responsiveScreenFontSize(4.5),
        color: '#ffffff',
    },
    addSalaryBtn: {
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(16),
        backgroundColor: '#EEEEEE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(3),
    },
    addExpensebtn: {
        height: responsiveScreenHeight(5),
        width: responsiveScreenWidth(11),
        backgroundColor: '#EEEEEE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(2),
        elevation: 3
    }
})