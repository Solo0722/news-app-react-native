import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import TabNavigator from "./TabNavigator";
import WelcomeTourNavigator from "./WelcomeTourNavigator";
import { GlobalContext } from "../context/context";

const Main = () => {
  const { currentUser } = useContext(GlobalContext);

  return <>{currentUser ? <TabNavigator /> : <WelcomeTourNavigator />}</>;
};

export default Main;
