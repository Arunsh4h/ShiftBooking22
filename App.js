/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./Routes";
import { Colors } from "./constants/Colors";

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Routes />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
  },
  footer: {
    backgroundColor: Colors.grayeshBlue,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
