import { StyleSheet } from "react-native";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const AddExpenseStyles = StyleSheet.create({
    input: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(8),
        borderRadius: responsiveScreenWidth(15),
        backgroundColor: "#000000",
        color: "#ffffff",
    },
})