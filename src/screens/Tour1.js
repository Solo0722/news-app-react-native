import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button, Center, Heading, Image } from "native-base";
import { colors } from "../constants/theme";
import { TOUR_SCREEN_2 } from "../constants/routeNames";

const Tour1 = ({ navigation }) => {
  return (
    <Center style={styles.container}>
      <Center>
        <Center
          width={100}
          height={100}
          padding={5}
          backgroundColor="white"
          borderRadius={"full"}
        >
          <Image
            source={require("../assets/images/dotty.png")}
            alt="logo"
            width={50}
            height={50}
          />
        </Center>
        <Heading
          mt={5}
          color={"white"}
          fontWeight={"hairline"}
          size="xs"
          textAlign={"center"}
          fontFamily={"lobster-italic"}
        >
          Breaking news,sports, TV, radio and a whole lot more. Dotty informs,
          educates and entertains - wherever you are,whatever your age
        </Heading>
      </Center>
      <Button
        width={"100%"}
        colorScheme={"coolGray"}
        onPress={() => navigation.navigate(TOUR_SCREEN_2)}
      >
        Get started
      </Button>
    </Center>
  );
};

export default Tour1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: `${colors.primaryColor}`,
    color: `${colors.white}`,
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
    justifyContent: "space-between",
  },
});
