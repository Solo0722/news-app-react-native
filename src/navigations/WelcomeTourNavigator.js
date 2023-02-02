import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TOUR_SCREEN_1, TOUR_SCREEN_2 } from "../constants/routeNames";
import Tour1 from "../screens/Tour1";
import Tour2 from "../screens/Tour2";
import { colors } from "../constants/theme";

const WelcomeTourNavigator = () => {
  const TourStack = createStackNavigator();

  return (
    <TourStack.Navigator
      initialRouteName={TOUR_SCREEN_1}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: `${colors.white}`,
        },
      }}
    >
      <TourStack.Screen name={TOUR_SCREEN_1} component={Tour1} />
      <TourStack.Screen name={TOUR_SCREEN_2} component={Tour2} />
    </TourStack.Navigator>
  );
};

export default WelcomeTourNavigator;
