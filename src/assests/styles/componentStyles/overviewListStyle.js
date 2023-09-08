import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export const overviewListStyle = StyleSheet.create({
    heading: {
        fontFamily: 'TTFirsNeue-Bold',
        fontSize: responsiveFontSize(5),


    },

    view: {
        height: responsiveScreenHeight(12),
        backgroundColor: '#ffffff',
        borderRadius: responsiveScreenWidth(5),
    },

    total: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2.5),
    },

    left: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2.5),

    },

    totalAmount: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2.5),
        color: '#1e6953',
    },

    remainingAmount: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(2.5),
        color: 'red',
    },

    date: {
        fontFamily: 'TTFirsNeue-Regular',
        fontSize: responsiveScreenFontSize(2),
        color: '#808080',
    },
    seeMore: {
        fontFamily: 'TTFirsNeue-Medium',
        fontSize: responsiveScreenFontSize(1.8),
        color: '#1e1e1e',
    }
})