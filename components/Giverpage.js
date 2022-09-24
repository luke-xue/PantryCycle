import React from "react";
import {
    NativeBaseProvider,
    Box,
    HStack,
    VStack,
    Pressable,
    Image,
    Center,
    Heading,
    FormControl,
    Input,
    Link,
    Button,
    AspectRatio,
    Stack,
    Text,
  } from "native-base";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
//   import NumericInput from 'react-native-numeric-input'
  import { SafeAreaView, StyleSheet, TextInput } from "react-native";
  import AddFoodItem from "./AddFoodItem.js";


  const Giverpage = () => {
  
    return (
        <Box style={styles.givepage}>
            <AddFoodItem/>
        </Box>

    );
  };
  
  const styles = StyleSheet.create({
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20
    },

        restaurant: {
          height: 40,
          marginTop: 12,
          marginHorizontal: 12,
          borderWidth: 1,
          padding: 10,
          width: 300,
          marginLeft: 20
        }
  });

  export default Giverpage;
  
