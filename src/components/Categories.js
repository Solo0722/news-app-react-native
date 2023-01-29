import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Heading, HStack, Image, VStack } from "native-base";
import { FlashList } from "@shopify/flash-list";

const Categories = () => {
  const renderItem = ({ item }) => (
    <View style={styles.categoriesCard}>
      <HStack
        space={4}
        height="100%"
        width={"100%"}
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <Image
          source={require("../assets/images/bgimg.jpg")}
          resizeMode="cover"
          width={"20%"}
          height={"100%"}
          borderRadius={10}
          alt="article-image"
        />
        <VStack space={2} height={"100%"} width={"75%"}>
          <Heading fontWeight={"extrabold"} fontSize={15} size="sm">
            A new corona virus is on the spread in the US.
          </Heading>
          <Heading color={"coolGray.400"} fontWeight={"hairline"} size="xs">
            2 hours ago
          </Heading>
        </VStack>
      </HStack>
    </View>
  );

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.headerWrapper}>
        <Heading fontWeight={"bold"} size="xs">
          Sports
        </Heading>
        <Button variant={"ghost"}>More</Button>
      </View>
      <FlashList
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: 15 }}></View>
        )}
        centerContent
        data={new Array(5)}
        estimatedItemSize={5}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  headerWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoriesCard: {
    height: 70,
  },
});
