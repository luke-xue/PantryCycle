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

const Restaurant = () => {
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
            <AspectRatio w="130" ratio={1 / 1}>
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
                Roti Roll
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                MMMMMMMmmmm so yummy
              </Text>
            </Stack>
            <Text fontWeight="400">yummy Bombay Frankie</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const Chooserpage = ({ navigation }) => {
  return <Restaurant />;
};

export default Chooserpage;
