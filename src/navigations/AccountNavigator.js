import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_ACCOUNT } from "../constants/routeNames";
import UserAccount from "../screens/UserAccount";

const AccountNavigator = () => {
  const AccountStack = createStackNavigator();

  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name={USER_ACCOUNT} component={UserAccount} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
