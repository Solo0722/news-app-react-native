import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_BOOKMARKS } from "../constants/routeNames";
import UserBookmarks from "../screens/UserBookmarks";

const BookmarkNavigator = () => {
  const BookmarkStack = createStackNavigator();

  return (
    <BookmarkStack.Navigator>
      <BookmarkStack.Screen name={USER_BOOKMARKS} component={UserBookmarks} />
    </BookmarkStack.Navigator>
  );
};

export default BookmarkNavigator;
