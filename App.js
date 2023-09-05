import React, { useState, useEffect } from "react";
import { AppNavigation } from "./src/navigation";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "./src/context/UserContext";
import { ExpenseContextProvider } from "./src/context/ExpenseContext";

const App = () => {
  // ------------------------------------------------------------
  // status bar color state
  // ------------------------------------------------------------
  const StyleTypes = ["default", "dark-content", "light-content"];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[2]);

  // ------------------------------------------------------------
  // fonts
  // ------------------------------------------------------------

  let [fontLoaded] = useFonts({
    "Montserrat-Black": require("./src/assests/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./src/assests/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./src/assests/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./src/assests/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assests/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./src/assests/fonts/Montserrat-Medium.ttf"),
    "TTFirsNeue-Regular": require("./src/assests/fonts/TTFirsNeueRegular.ttf"),
    "TTFirsNeue-Medium": require("./src/assests/fonts/TTFirsNeueMedium.ttf"),
    "TTFirsNeue-Light": require("./src/assests/fonts/TTFirsNeueLight.ttf"),
    "TTFirsNeue-DemiBold": require("./src/assests/fonts/TTFirsNeueDemiBold.ttf"),
    "TTFirsNeue-Bold": require("./src/assests/fonts/TTFirsNeueBold.ttf"),
    "TTFirsNeue-Black": require("./src/assests/fonts/TTFirsNeueBlack.ttf"),

  })

  useEffect(() => {
    if (fontLoaded) {
      // console.log("Fonts are loaded!");
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <UserContextProvider>
      <ExpenseContextProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ExpenseContextProvider>
    </UserContextProvider>
  )
}

export default App;