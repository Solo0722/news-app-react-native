import {
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { fetchTopHeadlines } from "../helpers/newsapi";
import {
  Heading,
  Icon,
  IconButton,
  Pressable,
  ScrollView,
  VStack,
  Image,
} from "native-base";
import { FlashList } from "@shopify/flash-list";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import { ARTICLEDETAIL } from "../constants/routeNames";
import SpinnerAnimation from "../components/SpinnerAnimation";
import { colors } from "../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Empty from "../components/Empty";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

const Home = ({ route, navigation }) => {
  const { category } = route.params;
  const { bookmarkArticle, currentUser } = useContext(GlobalContext);

  const [news, setNews] = useState(
    async () => JSON.parse(await AsyncStorage.getItem("news")) || null
  );
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNewsBasedOnCategory = async () => {
    setLoading(true);
    let response = await fetchTopHeadlines(
      category === "For you" ? "general" : category.toLowerCase().trim(),
      currentUser.countryForNews.code
    );
    setNews(response);
    await AsyncStorage.setItem("news", JSON.stringify(news));
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsBasedOnCategory();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      _hover={{
        bg: "coolGray.800:alpha.20",
      }}
      _pressed={{
        bg: "coolGray.800:alpha.20",
      }}
      onPress={() =>
        navigation.navigate(ARTICLEDETAIL, {
          article: item,
          category: category,
        })
      }
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
            onPress={() => bookmarkArticle(item, category)}
          />
        </View>
      </ImageBackground>
    </Pressable>
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchNewsBasedOnCategory().then(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <SpinnerAnimation />
      ) : news === undefined ? (
        <Empty />
      ) : (
        <FlashList
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              tintColor={`${colors.primaryColor}`}
              colors={[`${colors.primaryColor}`]}
              onRefresh={onRefresh}
              refreshing={refreshing}
            />
          }
          ListEmptyComponent={() => <Empty />}
          ListHeaderComponent={() => <View style={{ marginTop: 15 }} />}
          ListFooterComponent={() => <View style={{ marginVertical: 15 }} />}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 15 }}></View>
          )}
          centerContent
          data={news ? news : []}
          estimatedItemSize={100}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Home;

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
