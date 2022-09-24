import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, HStack, VStack, Pressable, Image, Center, Heading, FormControl, Input, Link, Button } from "native-base";
import Homepage from "./components/Homepage.js";

export default function App() {
  return (
    <NativeBaseProvider>
      <Homepage/>
    </NativeBaseProvider>
  );
}
