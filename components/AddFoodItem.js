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

import { Formik } from "formik";
import axios from "axios";

import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const addFood = async (in_val) => {
  const options = {
    // method: "POST",
    // body: JSON.stringify({
    Restaurant: in_val.restaurant,
    Name: in_val.item,
    Type: "N/A",
    Count: parseInt(in_val.quantity),
    Lat: 123,
    Long: 123,
    Calories: parseInt(in_val.calories),
    Footprint: 123,
    Description: in_val.description,
    Image: "N/A",
    //  })
  };
  axios.post("http://127.0.0.1:5000/add", options);
  // fetch("http://127.0.0.1:5000/add", options)
};

const AddFoodItem = () => {
  return (
    <Formik
      initialValues={{
        restaurant: "",
        item: "",
        description: "",
        quantity: "",
        calories: "",
      }}
      onSubmit={(values, { resetForm }) => {
        // console.log('submitted', values)
        addFood(values);
        resetForm({ values: "" });
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView w="100%">
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: "100%",
              md: "25%",
            }}
          >
            <Box>
              <Text bold fontSize="xl" mb="4">
                Add Items
              </Text>
              <FormControl mb="5">
                <FormControl.Label>Restaurant/Store Name</FormControl.Label>
                <Input
                  onChangeText={handleChange("restaurant")}
                  value={values.restaurant}
                />
              </FormControl>

              <FormControl mb="5">
                <FormControl.Label>Item Name</FormControl.Label>
                <Input
                  onChangeText={handleChange("item")}
                  value={values.item}
                />
              </FormControl>

              <FormControl mb="5">
                <FormControl.Label>Description</FormControl.Label>
                <Input
                  onChangeText={handleChange("description")}
                  value={values.description}
                />
              </FormControl>

              <FormControl mb="5">
                <FormControl.Label>Quantity</FormControl.Label>
                <Input
                  onChangeText={handleChange("quantity")}
                  value={values.quantity}
                />
              </FormControl>

              <FormControl mb="5">
                <FormControl.Label>Calories</FormControl.Label>
                <Input
                  onChangeText={handleChange("calories")}
                  value={values.calories}
                />
              </FormControl>

              <Button
                onPress={handleSubmit}
                title="Submit"
                style={styles.button}
              >
                SUBMIT
              </Button>
            </Box>
          </Stack>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    margin: 12,
    padding: 10,
    alignSelf: "center",
    color: "red",
  },
});

export default AddFoodItem;
