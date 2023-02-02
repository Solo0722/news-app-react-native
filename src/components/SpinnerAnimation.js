import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Spinner } from "native-base";

const SpinnerAnimation = () => {
  return (
    <Spinner
      size={"lg"}
      animating={true}
      width={"100%"}
      height={"100%"}
      flex={1}
      alignContent="center"
      alignSelf={"center"}
    />
  );
};

export default SpinnerAnimation;
