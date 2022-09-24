import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Pressable,
  Image,
  Center,
  Heading,
  AspectRatio,
  Stack,
  Text,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";

const Restaurant = (props) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack direction="row">
          <Box>
            <AspectRatio w="140" ratio={1 / 1}>
              <Image
                source={{
                  uri: "https://spicecravings.com/wp-content/uploads/2020/12/Chicken-Kathi-Roll-Featured-1.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {props.name}
              </Heading>
            </Stack>
            <Box width="40" overflow="hidden">
              <Text fontWeight="400" >This restaurant serves this type of food blah blah blah</Text>
            </Box>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            ></HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const Chooserpage = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const options = {
      method: "GET",
    };

    fetch("http://127.0.0.1:5000/readAll", options)
      .then((res) => res.json())
      .then((text) => {
        setRestaurants(text);
      });
  };

  curr = []
  if (restaurants) {
    i = 0
    for (var key in restaurants){
      tempItem = (<Restaurant name = {key}/>)
      curr[i] = tempItem
      i++
    }
  }

  return(
    <View>
      {curr}
    </View>
  )

  // return (
  //   <View>
  //     {restaurants.length > 0 &&
  //       restaurants.map((val, key) => {
  //         return <Restaurant name={val} />;
  //       })}
  //   </View>
  // );
};

export default Chooserpage;
