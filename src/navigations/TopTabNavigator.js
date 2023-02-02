import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../constants/theme";
import { newsCategories } from "../constants/general";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Platform, StatusBar } from "react-native";
import Home from "../screens/Home";

const TopTabNavigator = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      sceneContainerStyle={{
        backgroundColor: `${colors.white}`,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      overScrollMode="always"
      initialLayout={{ width: Dimensions.get("window").width }}
      screenOptions={{
        swipeEnabled: true,
        animationEnabled: true,
        tabBarScrollEnabled: true,
        lazy: true,
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontFamily: "manrope-semibold",
        },
        tabBarShowIcon: false,
        tabBarActiveTintColor: `${colors.primaryColor}`,
        tabBarInactiveTintColor: "rgba(0,0,0,0.5)",
        tabBarItemStyle: {
          width: "auto",
        },
        tabBarStyle: {
          elevation: 5,
        },
        // tabBarAllowFontScaling: true,
        tabBarBounces: true,
        tabBarIndicatorStyle: {
          backgroundColor: `${colors.primaryColor}`,
        },
      }}
    >
      {newsCategories.map((item, i) => {
        return (
          <TopTab.Screen
            key={i}
            name={item.routeName}
            component={Home}
            initialParams={{ category: item.title }}
            options={{
              tabBarIcon: ({ focused, color }) => {
                // let c = color;
                // c = focused && `${colors.primaryColor}`;

                return (
                  <MaterialIcons name={item.iconName} size={15} color={color} />
                );
              },
            }}
          />
        );
      })}
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
