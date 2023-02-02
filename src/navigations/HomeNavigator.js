import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ARTICLEDETAIL, HOME } from "../constants/routeNames";
import { colors } from "../constants/theme";
import { Avatar, Button, Heading, Image } from "native-base";
import TopTabNavigator from "./TopTabNavigator";
import ArticleDetail from "../screens/ArticleDetail";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { CountryPicker } from "react-native-country-codes-picker";
import { GlobalContext } from "../context/context";

const HomeNavigator = ({ route, navigation }) => {
  const HomeStack = createStackNavigator();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === ARTICLEDETAIL) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  const [show, setShow] = useState(false);

  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: `${colors.white}`,
        },
        headerTitleStyle: {
          fontFamily: "manrope-light",
        },
        headerStyle: {
          elevation: 0,
        },
      }}
    >
      <HomeStack.Screen
        name={HOME}
        component={TopTabNavigator}
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
              <>
                <Button
                  variant="solid"
                  rounded={"md"}
                  bgColor={"coolGray.100"}
                  size="sm"
                  onPress={() => setShow(true)}
                >
                  {currentUser
                    ? currentUser.countryForNews.flag
                    : "Pick country"}
                </Button>
                <CountryPicker
                  show={show}
                  // when picker button press you will get the country object with dial code
                  pickerButtonOnPress={(item) => {
                    setCurrentUser({ ...currentUser, countryForNews: item });
                    setShow(false);
                  }}
                />
              </>
            );
          },
          headerRight: () => {
            return (
              <Avatar size="sm" rounded={"md"} bgColor={"coolGray.500"}>
                {currentUser ? currentUser.username.slice(0, 2) : "D"}
              </Avatar>
            );
          },
        }}
      />
      <HomeStack.Screen
        name={ARTICLEDETAIL}
        component={ArticleDetail}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { display: "none" },
          headerLeftContainerStyle: {
            backgroundColor: "rgba(255,255,255,0.4)",
            height: 40,
            borderRadius: 200,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
