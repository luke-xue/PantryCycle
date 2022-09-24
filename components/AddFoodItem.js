import React from "react";
import {
    Button,
    Box,
    Center
  } from "native-base";

import { SafeAreaView, StyleSheet, TextInput } from "react-native";

  const AddFoodItem = () => {

    const [item, onChangeText] = React.useState(null);
    // const [group, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    function sendValues(number) {
        console.log(number);
    };
  
    return (
    
      <Box style={styles.box}>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={item}
          placeholder="Item name"
          keyboardType="numeric"
        />

        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={group}
          placeholder="Food group"
        /> */}

        <TextInput
          style={styles.quantity}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Quantity"
          keyboardType="numeric"
        />

        {/* <Button 
          style={styles.button}
          mt="2"
        //   mt="2" backgroundColor="#87ab69" width=28
          onPress={() =>
            console.log('Food added')
          }>
            ADD
          </Button> */}

      </Box>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 12,
      marginHorizontal: 12,
      borderWidth: 1,
      padding: 10,
    },

    quantity: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    button: {
        backgroundColor: "#87ab69",
        width: 40,
        height: 30,
        alignSelf: "center"
    },

    box: {
        width: 300,
        backgroundColor: 'white',
        alignSelf: "center",
        margin: 10
    },
  });

 

  export default AddFoodItem;