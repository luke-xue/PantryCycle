import { ImageBackground, StyleSheet, Text, View, ViewPagerAndroidBase } from "react-native";
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
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useRef, useContext } from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height:100000,
    backgroundColor: "#87ab69",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

const image = { uri: "./istockphoto-942483984-170667a.jpeg" };

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container} >
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="40"
          textAlign="center"
          color="white"
          _dark={{
            color: "warmGray.50",
          }}
        >
          PantryCycle
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "white",
          }}
          color="white"
          fontWeight="medium"
          textAlign = "center"
          fontSize="20"
        >
          good tastes, no food wastes!
        </Heading >

          <Heading mt="120"
          _dark={{
            color: "white",
          }}
          color="white"
          fontWeight="bold"
          textAlign = "center"
          fontSize="20">
            I AM A...
          </Heading>

        <VStack space={3} mt="2">
          
          {/* <Text style={{color: "red"}}>Hello Style!</Text> */}

          <Button mt="2" variant="subtle"
          colorScheme="primary"
          onPress={() =>
            navigation.navigate('Giver')
          }>
            Provider
          </Button>

          <Button mt="5" variant="subtle"
          colorScheme="primary"
          onPress={() =>
            navigation.navigate('Chooser')
          }>
            Chooser
          </Button>

              <Image mt="70"
              alignSelf="center"
            style={styles.tinyLogo}
            alt="something"
            source={{
              // uri: 'https://reactnative.dev/img/tiny_logo.png'
              uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1556249/earth-clipart-md.png',
            }}
          />
        </VStack>
      </Box>
    </Center>
    </View>
  );
};

export default Homepage;
