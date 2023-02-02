import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ARTICLEDETAIL, USER_BOOKMARKS } from "../constants/routeNames";
import UserBookmarks from "../screens/UserBookmarks";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { colors } from "../constants/theme";

const BookmarkNavigator = ({ navigation, route }) => {
  const BookmarkStack = createStackNavigator();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === ARTICLEDETAIL) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <BookmarkStack.Navigator
      initialRouteName={USER_BOOKMARKS}
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
      <BookmarkStack.Screen
        name={USER_BOOKMARKS}
        component={UserBookmarks}
        options={{
          headerTitle: "Bookmarks",
          headerTitleStyle: {
            fontFamily: "manrope-semibold",
          },
        }}
      />
    </BookmarkStack.Navigator>
  );
};

export default BookmarkNavigator;
