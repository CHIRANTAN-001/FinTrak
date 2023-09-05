import AsyncStorage from "@react-native-async-storage/async-storage"

export const checkUserLoggedIn = async () => {
    try {
        const userDataString = await AsyncStorage.getItem('user')

        if (userDataString) {
            const userData = JSON.stringify(userDataString);
        } else {
            console.log("user is not logged in")
        }
    } catch (error) {
        console.log("error: ", error)        
    }
}