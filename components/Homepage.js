import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, HStack, VStack, Pressable, Image, Center, Heading, FormControl, Input, Link, Button } from "native-base";

const Homepage = () => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome to beggars can't be choosers
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Please select your role.
        </Heading>

        <VStack space={3} mt="5">
          <Button mt="2" colorScheme="indigo">
            Beggar
          </Button>
          <Button mt="2" colorScheme="indigo">
            Chooser
          </Button>
        </VStack>
      </Box>
    </Center>;
};

export default Homepage