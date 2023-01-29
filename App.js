import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Button } from "native-base";
import { useCallback } from "react";
import { colors, nativebaseTheme } from "./src/constants/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { setCustomText } from "react-native-global-props";
import "react-native-gesture-handler";
import TabNavigator from "./src/navigations/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "manrope-light": require("./src/assets/fonts/Manrope-Light.ttf"),
    "manrope-regular": require("./src/assets/fonts/Manrope-Regular.ttf"),
    "manrope-semibold": require("./src/assets/fonts/Manrope-SemiBold.ttf"),
    "lobster-italic": require("./src/assets/fonts/LobsterTwo-Italic.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "manrope-light",
    },
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  setCustomText(customTextProps);

  return (
    <NativeBaseProvider theme={nativebaseTheme}>
      <StatusBar style="light" translucent />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
