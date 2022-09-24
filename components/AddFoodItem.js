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

import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const AddFoodItem = () => {
    return (
    <Formik
        initialValues={{restaurant:'', item:'', description:'', quantity:''}}
        onSubmit={(values) => console.log('submitted', values)}


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
                />
            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Item Name</FormControl.Label>
              <Input 
                onChangeText={handleChange('item')}
              />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Description</FormControl.Label>
              <Input 
                onChangeText={handleChange('description')}
              />

            </FormControl>

            <FormControl mb="5">
              <FormControl.Label>Quantity</FormControl.Label>
              <Input 
                onChangeText={handleChange('quantity')}
              />

            </FormControl>
            <Button onPress={handleSubmit} title="Submit"/>
          </Box>
        </Stack>
     
      </ScrollView>
        )}
    </Formik>
    )
  };

  export default AddFoodItem;