import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/Homepage.js";
import Chooserpage from "./components/Chooserpage.js";
import React, { useEffect, useState, useRef, useContext } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    initialize();
  }, []);
  
  const initialize = async () => {
    const options = {
      method: "POST",
    };
  
    fetch("http://127.0.0.1:5000/init", options)
  };
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Chooser" component={Chooserpage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
