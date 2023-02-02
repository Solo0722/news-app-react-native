import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  ACCOUNTNAVIGATOR,
  BOOKMARKSNAVIGATOR,
  HOMENAVIGATOR,
  SEARCHNAVIGATOR,
} from "../constants/routeNames";
import AccountNavigator from "./AccountNavigator";
import BookmarkNavigator from "./BookmarkNavigator";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={HOMENAVIGATOR}
      sceneContainerStyle={{
        backgroundColor: `${colors.body}`,
        color: `${colors.tertiaryColor}`,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 23 }) => {
          let iconName;
          if (route.name === HOMENAVIGATOR) {
            iconName = "home-filled";
            size = focused ? 25 : 20;
          } else if (route.name === SEARCHNAVIGATOR) {
            iconName = "search";
            size = focused ? 25 : 20;
          } else if (route.name === ACCOUNTNAVIGATOR) {
            iconName = "person";
            size = focused ? 25 : 20;
          } else if (route.name === BOOKMARKSNAVIGATOR) {
            iconName = "bookmarks";
            size = focused ? 25 : 20;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: `${colors.black}`,
        tabBarStyle: {
          height: 60,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: `${colors.white}`,
        },
      })}
    >
      <Tab.Screen name={HOMENAVIGATOR} component={HomeNavigator} />
      <Tab.Screen name={SEARCHNAVIGATOR} component={SearchNavigator} />
      <Tab.Screen name={BOOKMARKSNAVIGATOR} component={BookmarkNavigator} />
      <Tab.Screen name={ACCOUNTNAVIGATOR} component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
