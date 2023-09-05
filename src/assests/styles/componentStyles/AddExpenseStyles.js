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
        // elevation: 2,
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
    }
})