import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import Trending from "../components/Trending";
import Categories from "../components/Categories";
import TopTabNavigator from "../navigations/TopTabNavigator";
import { Divider } from "native-base";

const Home = () => {
  return (
    <ScrollView style={styles.homeContainer}>
      <HomeCarousel />
      {/* <Trending /> */}
      <Categories />
      <View style={styles.topTabContainer}>
        <TopTabNavigator />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    width: "100%",
  },
  topTabContainer: {
    width: "100%",
    marginVertical: 30,
  },
});
