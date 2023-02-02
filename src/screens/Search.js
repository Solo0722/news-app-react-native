import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Empty from "../components/Empty";
import { FlashList } from "@shopify/flash-list";
import { fetchEverything } from "../helpers/newsapi";

import {
  Heading,
  Icon,
  IconButton,
  Pressable,
  ScrollView,
  VStack,
  Image,
  Input,
  FormControl,
} from "native-base";
import moment from "moment";
import { ARTICLEDETAIL } from "../constants/routeNames";
import SpinnerAnimation from "../components/SpinnerAnimation";
import { colors } from "../constants/theme";
import { useFocusEffect } from "@react-navigation/native";
import { GlobalContext } from "../context/context";

const Search = ({ navigation }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (searchTerm) => {
    if (searchTerm !== "") {
      setLoading(true);
      let response = await fetchEverything(searchTerm.trim().toLowerCase());
      setSearchResult(response);
      setLoading(false);
    }
  };

  const SearchInput = () => {
    const [searchText, setSearchText] = useState(null);
    return (
      <FormControl>
        <Input
          onChangeText={(e) => setSearchText(e)}
          // value={searchText}
          variant={"filled"}
          bgColor={"coolGray.100"}
          placeholder={"Search..."}
          InputRightElement={
            <Pressable onPress={() => fetchSearchResults(searchText)}>
              <Icon
                as={<MaterialIcons name={"search"} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </FormControl>
    );
  };

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
          category: "Search",
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
            icon={<Icon as={MaterialIcons} name="bookmark-outline" />}
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
          />
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <SearchInput />
      {loading ? (
        <SpinnerAnimation />
      ) : searchResult === undefined ? (
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
          data={searchResult ? searchResult : []}
          estimatedItemSize={100}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
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
