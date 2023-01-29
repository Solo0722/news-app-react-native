import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SEARCH } from "../constants/routeNames";
import Search from "../screens/Search";

const SearchNavigator = () => {
  const SearchStack = createStackNavigator();

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={SEARCH} component={Search} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
