import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Search from "../screens/Search";
import {
  HOME,
  SEARCH,
  USER_ACCOUNT,
  USER_BOOKMARKS,
} from "../constants/routeNames";
import UserBookmarks from "../screens/UserBookmarks";
import UserAccount from "../screens/UserAccount";
import Home from "../screens/Home";
import { colors } from "../constants/theme";

const TopTabNavigator = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      screenOptions={{
        swipeEnabled: true,
        animationEnabled: true,
        tabBarScrollEnabled: true,
        lazy: true,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
        tabBarGap: 0,
        tabBarItemStyle: {
          width: 90,
        },
        tabBarStyle: {
          shadowRadius: 0,
          elevation: 0,
        },
        tabBarBounces: true,
        tabBarIndicatorStyle: {
          backgroundColor: `${colors.primaryColor}`,
        },
      }}
      sceneContainerStyle={{
        // backgroundColor: `${colors.white}`,
        minHeight: "100%",
        flex: 1,
      }}
      overScrollMode="always"
    >
      <TopTab.Screen
        name={SEARCH}
        component={Search}
        options={{ tabBarLabel: "Sports" }}
      />
      <TopTab.Screen name={"Home"} component={UserAccount} />
      <TopTab.Screen name={"Home2"} component={UserAccount} />
      <TopTab.Screen name={"Home3"} component={UserAccount} />
      <TopTab.Screen name={"Home4"} component={UserAccount} />
      <TopTab.Screen name={"Home5"} component={UserAccount} />
      <TopTab.Screen name={"Home6"} component={UserAccount} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
