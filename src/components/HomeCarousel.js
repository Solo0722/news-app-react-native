import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { AnimatedFlashList, FlashList } from "@shopify/flash-list";
import { Button, Heading, Icon, VStack, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const HomeCarousel = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bgimg.jpg")}
      resizeMode="cover"
      imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
      style={styles.container}
    >
      <View style={styles.secondaryContainer}>
        <VStack space={4} marginTop={20}>
          <View
            padding={2}
            backgroundColor={"rgba(255,255,255,0.4)"}
            borderRadius={20}
            width={150}
          >
            <Heading color={"white"} fontWeight={"hairline"} size="xs">
              News of the day
            </Heading>
          </View>
          <Heading color={"white"} fontWeight={"extrabold"} size="lg">
            A new corona virus is spreading in the US.
          </Heading>
          <Button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: 0,
            }}
            variant="ghost"
            endIcon={
              <Icon as={MaterialIcons} name="arrow-right-alt" size="sm" />
            }
            size="md"
          >
            Learn more
          </Button>
        </VStack>
      </View>
    </ImageBackground>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    flex: 1,
    marginBottom: 30,
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 9,
    borderRadius: 20,
  },
});
