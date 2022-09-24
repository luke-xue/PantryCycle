import React from "react";
import {
    Button,
    Box,
    Center,
    ScrollView,
    Input,
    FormControl,
    Stack,
    Text,
    Divider,

  } from "native-base";

import { Formik } from 'formik';

import { SafeAreaView, StyleSheet, View, TextInput } from "react-native";

const AddFoodItem = () => {
    return (
    <View style={styles.bg}>
    <Formik style={styles.form}
        initialValues={{restaurant:'', item:'', description:'', quantity:'', calories:''}}
        onSubmit={(values, { resetForm }) => {
            console.log('submitted', values)
            resetForm({values: ''});
        }}


    >
        {({handleChange, handleSubmit, values})=>(
        <ScrollView w="100%">
        <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
        base: "100%",
        md: "25%"
      }}>
          <Box>
            <Text bold fontSize="xl" mb="4">
              Add Items
            </Text>
            <FormControl mb="5">
              <FormControl.Label>Restaurant/Store Name</FormControl.Label>
              <Input 
              onChangeText={handleChange('restaurant')}
              value={values.restaurant}
                />
            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Item Name</FormControl.Label>
              <Input 
                onChangeText={handleChange('item')}
                value={values.item}
              />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Description</FormControl.Label>
              <Input 
                onChangeText={handleChange('description')}
                value={values.description}
              />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Quantity</FormControl.Label>
              <Input 
                onChangeText={handleChange('quantity')}
                value={values.quantity}
              />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Calories</FormControl.Label>
              <Input 
                onChangeText={handleChange('calories')}
                value={values.calories}
              />

            </FormControl>

            <Button 
                onPress={handleSubmit} 
                title="Submit"
                style={styles.button}
            >SUBMIT</Button>
          </Box>
        </Stack>
     
      </ScrollView>
        )}
    </Formik>
    </View>
    )
  };

  const styles = StyleSheet.create({
    button: {
      height: 40,
      width: 100,
      margin: 12,
      padding: 10,
      alignSelf: "center",
      backgroundColor: "#87ab69"
    },
    bg: {
        // backgroundColor: "#c7ddb5"
    }
});


  export default AddFoodItem;