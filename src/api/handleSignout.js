import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

export const handleSignOut = async () => {
    const navigation = useNavigation();
    try {
        const user = auth.currentUser;

        if (user) {
            await signOut(auth);
            await AsyncStorage.removeItem('userToken');

        } else {
            console.log('No user is signed in');
        }
        navigation.navigate('AuthHomeScreen');
    } catch (error) {
        console.log(error);
    }
}