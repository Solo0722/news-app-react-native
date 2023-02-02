import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SEARCH } from "../constants/routeNames";
import Search from "../screens/Search";
import { colors } from "../constants/theme";

const SearchNavigator = () => {
  const SearchStack = createStackNavigator();

  return (
    <SearchStack.Navigator
      initialRouteName={SEARCH}
      screenOptions={{
        cardStyle: {
          backgroundColor: `${colors.white}`,
        },
        headerTitleStyle: {
          fontFamily: "manrope-light",
        },
        headerStyle: {
          elevation: 5,
          shadowColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <SearchStack.Screen
        name={SEARCH}
        component={Search}
        options={{
          headerTitle: "Search",
          headerTitleStyle: {
            fontFamily: "manrope-semibold",
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
