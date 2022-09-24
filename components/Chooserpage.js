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
  Button,
  Modal,
} from "native-base";
import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Restaurant = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [currRes, setCurrRes] = useState("");
  // const [togglePref, setTogglePref] = useState(False)

  // if (togglePref){
  //   getOptimizedRestaurants();
  // }

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

  // const getOptimizedRestaurants = async () => {
  //   const options = {
  //     method: "GET",
  //     body: JSON.stringify({
  //       Lat: 40.8098,
  //       Long: -73.9628
  //     })
  //   };

  //   fetch("http://127.0.0.1:5000/rank", options)
  //     .then((res) => res.json())
  //     .then((text) => {
  //       setRestaurants(text);
  //     });
  // };
  items = [];
  if (currRes) {
    i = 0;
    // Object.keys(restaurants).map(function(keyName, keyIndex) {
      restaurants[currRes].forEach((food) => {
        tempItem = (
          <HStack alignItems="center" justifyContent="space-between" key={i}>
            <Text fontWeight="medium">{food["Name"]}</Text>
            <Text color="black">Amt: {food['Count']}, ({food['Footprint']}gCO2)</Text>
          </HStack>
        )
        items[i] = tempItem
        i++
        })
    // })
    // for (var key in restaurants) {
    //   tempItem = (
    //     <HStack alignItems="center" justifyContent="space-between" key={i}>
    //       <Text fontWeight="medium">{restaurants[key]['Name']}</Text>
    //       <Text color="blueGray.400">{restaurants[key]['Count']}</Text>
    //     </HStack>
    //   );
    //   items[i] = tempItem;
    //   i++;
    // }
  }

  return (
    <Box alignItems="center">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Items Available</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              {items}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <TouchableOpacity onPress={() => {
        setCurrRes(props.name)
        setShowModal(true)}}>
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
                    // uri: "https://spicecravings.com/wp-content/uploads/2020/12/Chicken-Kathi-Roll-Featured-1.jpg",
                   uri: props.base64Icon
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
                <Text fontWeight="400">
                  This restaurant serves this type of food blah blah blah
                </Text>
              </Box>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              ></HStack>
            </Stack>
          </Stack>
        </Box>
      </TouchableOpacity>
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

  curr = [];
  if (restaurants) {
    i = 0;
    Object.keys(restaurants).map(function(keyName, keyIndex) {
    // for (var key in restaurants) {
      var base64Icon = 'data:image/png;base64,' + restaurants[keyName][0]["Image"]
      tempItem = <Restaurant name={keyName} key={i} base64Icon={base64Icon} />;
      curr[i] = tempItem;
      i++;c
    }
    )
  }

  return (
    <View>
  <Button marginTop="5" marginLeft="3" marginBottom="3" marginRight="5" onPress={() => setCurrRes(!currRes)}>Toggle Optimization Algorithm</Button>
  <View>{curr}</View>
  </View>
  );

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
