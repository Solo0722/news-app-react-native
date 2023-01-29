import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME } from "../constants/routeNames";
import Home from "../screens/Home";
import { colors } from "../constants/theme";
import { Avatar, Heading, HStack, Image } from "native-base";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: `${colors.white}`,
        },
        headerTitleStyle: {
          fontFamily: "manrope-light",
        },
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name={HOME}
        component={Home}
        options={{
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRightContainerStyle: {
            padding: 10,
          },
          headerTitleContainerStyle: {
            display: "none",
          },
          headerLeft: () => {
            return (
              <Image
                source={require("../assets/images/dotty.png")}
                alt="logo"
                width={45}
                height={45}
              />
            );
          },
          headerRight: () => {
            return (
              <Avatar size="md" width={35} height={35}>
                S
              </Avatar>
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
