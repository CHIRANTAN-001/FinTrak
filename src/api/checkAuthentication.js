import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkAuthentication = async () => { 
    const userToken = await AsyncStorage.getItem('userToken');

    return userToken;
}