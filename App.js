import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

import AppNavigation from "./navigation/AppNavigation";
import AppContextProvider from "./store/app-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "app-font": require("./assets/fonts/Roboto-Regular.ttf"),
    "app-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AppContextProvider>
        <AppNavigation />
      </AppContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
