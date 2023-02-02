import React, { useContext } from "react";
import { ARTICLEDETAIL, HOME, HOMENAVIGATOR } from "../constants/routeNames";
import { FlashList } from "@shopify/flash-list";
import moment from "moment";
import { ImageBackground, StyleSheet, View } from "react-native";
import {
  Button,
  Heading,
  Icon,
  IconButton,
  Pressable,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";
import { GlobalContext } from "../context/context";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import Empty from "../components/Empty";

const UserBookmarks = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const removeFromBookmarks = (item) => {
    let updatedBookmarks = currentUser.bookmarks.filter(
      (bookmark) => bookmark.title !== item.title
    );
    setCurrentUser({
      ...currentUser,
      bookmarks: updatedBookmarks,
    });
  };

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerRight: () =>
          currentUser.bookmarks.length > 0 && (
            <Button
              variant={"subtle"}
              rounded={"2xl"}
              backgroundColor={"coolGray.200"}
              // color={"coolGray.900"}
              colorScheme={"warmGray"}
            >
              {currentUser.bookmarks.length}
            </Button>
          ),
        headerRightContainerStyle: {
          paddingRight: 10,
        },
      });
    })
  );

  const renderItem = ({ item }) => (
    <Pressable
      _hover={{
        bg: "coolGray.800:alpha.20",
      }}
      _pressed={{
        bg: "coolGray.800:alpha.20",
      }}
      onPress={() => {
        navigation.navigate(ARTICLEDETAIL, {
          article: item,
          category: "Sports",
        });
      }}
    >
      <ImageBackground
        source={{ uri: item.urlToImage || null }}
        resizeMode="cover"
        resizeMethod="resize"
        imageStyle={{
          borderRadius: 10,
        }}
        style={styles.imgContainer}
      >
        <View style={styles.secondaryContainer}>
          <VStack space={2}>
            <Heading color={"coolGray.300"} fontWeight={"hairline"} size="xs">
              {moment(item.publishedAt).fromNow()}
            </Heading>
            <Heading color={"white"} fontWeight={"extrabold"} size="sm">
              {item.title}
            </Heading>
          </VStack>
          <IconButton
            icon={<Icon as={MaterialIcons} name="close" />}
            variant="subtle"
            size="sm"
            backgroundColor={"rgba(255,255,255,0.2)"}
            borderRadius="full"
            position={"absolute"}
            top={5}
            right={5}
            _icon={{
              color: "coolGray.50",
              size: "md",
            }}
            _hover={{
              bg: "coolGray.800:alpha.20",
            }}
            _pressed={{
              bg: "coolGray.800:alpha.20",
            }}
            onPress={() => removeFromBookmarks(item)}
          />
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {currentUser.bookmarks.length === 0 ? (
        <Empty />
      ) : (
        <FlashList
          ListEmptyComponent={() => <Empty />}
          ListHeaderComponent={() => <View style={{ marginTop: 15 }} />}
          ListFooterComponent={() => <View style={{ marginVertical: 15 }} />}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 15 }}></View>
          )}
          centerContent
          data={currentUser ? currentUser.bookmarks : []}
          estimatedItemSize={100}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default UserBookmarks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: 200,
  },
  secondaryContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 9,
    borderRadius: 10,
  },
});
