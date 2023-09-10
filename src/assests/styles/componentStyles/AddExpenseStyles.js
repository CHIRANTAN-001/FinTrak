import { StyleSheet } from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const AddExpenseStyles = StyleSheet.create({
    input: {
        flex: 1,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(8),
        borderRadius: responsiveScreenWidth(15),
        backgroundColor: "#ffffff",
        color: "#1e1e1e",
        fontSize: responsiveScreenFontSize(1.7),
        // elevation: 1,
        overflow: "hidden",
        // position: "absolute"
        // position: "relative",
        
    },

    icon: {
        position: "absolute",
        zIndex: 1,
        paddingLeft: responsiveScreenWidth(5),
        
    },
    inpBtn: {
        height: responsiveScreenHeight(8),
        width: responsiveScreenWidth(90),
        borderRadius: responsiveScreenWidth(50),
        backgroundColor: "#1e1e1e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },

    dropdown: {
        // margin: 16,
        height: responsiveScreenHeight(8),
        width: responsiveScreenWidth(90),
        backgroundColor: '#ffffff',
        color: '#1e1e1e',
        borderRadius: responsiveScreenWidth(15),
        // shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        // elevation: 2,
    },
    placeholderStyle: {
        fontSize: responsiveScreenFontSize(1.7),
        color: "#1e1e1e",
        fontFamily: "TTFirsNeue-Regular",
        paddingLeft: responsiveScreenWidth(2)
        
    },
    selectedTextStyle: {
        fontSize: responsiveScreenFontSize(1.4),
        color: "#1e1e1e",
        paddingLeft: responsiveScreenWidth(2),
        backgroundColor: "#ffffff",
        // fontFamily: "Sora-SemiBold",
    },
    iconStyle: {
        width: responsiveScreenWidth(6),
        height: responsiveScreenWidth(6),
    },
    inputSearchStyle: {
        height: responsiveScreenWidth(12),
        fontSize: responsiveScreenFontSize(2),
    },


})