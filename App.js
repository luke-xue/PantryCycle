import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/Homepage.js";
// import Giverpage from "./components/Giverpage.js";
import Giverpage2 from "./components/Giverpage2.js";
import Chooserpage from "./components/Chooserpage.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Giver" component={Giverpage2} />
          <Stack.Screen name="Chooser" component={Chooserpage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
