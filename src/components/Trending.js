import { StyleSheet, Text } from "react-native";
import { Button, Heading, Image, View, VStack } from "native-base";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { colors } from "../constants/theme";

const Trending = () => {
  const renderItem = ({ item }) => (
    <View style={styles.trendingCard}>
      <VStack space={2}>
        <Image
          source={require("../assets/images/bgimg.jpg")}
          resizeMode="cover"
          width={"100%"}
          height={150}
          borderRadius={20}
          alt="article-image"
        />
        <Heading fontWeight={"extrabold"} fontSize={15} size="sm">
          A new corona virus is on the spread in the US.
        </Heading>
        <Heading color={"coolGray.400"} fontWeight={"hairline"} size="xs">
          2 hours ago
        </Heading>
      </VStack>
    </View>
  );

  return (
    <View style={styles.trendingContainer}>
      <View style={styles.headerWrapper}>
        <Heading fontWeight={"bold"} size="xs">
          Trending news
        </Heading>
        <Button variant={"ghost"}>More</Button>
      </View>
      <FlashList
        ItemSeparatorComponent={() => (
          <View style={{ marginHorizontal: 10 }}></View>
        )}
        centerContent
        horizontal
        data={new Array(5)}
        estimatedItemSize={5}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  trendingContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    width: "100%",
  },
  headerWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  trendingCard: {
    width: 240,
    height: 240,
  },
});
