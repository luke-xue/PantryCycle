import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import AddFoodItem from "./AddFoodItem.js";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const Giverpage2 = () => (
  <ScrollView>



    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
    <AddFoodItem/>
  </ScrollView>
);



export default Giverpage2;