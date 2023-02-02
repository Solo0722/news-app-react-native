import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import { StatusBar } from "react-native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Input,
  VStack,
} from "native-base";
import { newsCategories } from "../constants/general";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { HOME } from "../constants/routeNames";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

const Tour2 = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({
    code: "GH",
    dial_code: "+233",
    flag: "🇬🇭",
    name: {
      bg: "Гана",
      by: "Гана",
      cn: "加纳",
      cz: "Ghana",
      de: "Ghana",
      ee: "Ghana",
      en: "Ghana",
      es: "Ghana",
      fr: "Ghana",
      it: "Ghana",
      jp: "ガーナ",
      nl: "Ghana",
      pl: "Ghana",
      pt: "Gana",
      ro: "Ghana",
      ru: "Гана",
      ua: "Гана",
    },
  });
  const { setCurrentUser } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    username: "",
    countryForNews: country,
    favoriteCategories: [],
    bookmarks: [],
  });

  const removeCategory = (item) => {
    let cats = formData.favoriteCategories.filter((cat) => cat !== item.title);
    setFormData({ ...formData, favoriteCategories: cats });
  };

  return (
    <Box style={styles.container}>
      <Heading fontWeight={"extrabold"} size="lg">
        Let us know your preferences
      </Heading>
      <Box>
        <VStack space={10} mt="10">
          <FormControl>
            <FormControl.Label>
              What name do you like to be called?
            </FormControl.Label>
            <Input
              onChangeText={(e) => setFormData({ ...formData, username: e })}
              variant={"filled"}
              bgColor={"coolGray.100"}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              Where do you want to get news from?
            </FormControl.Label>
            <Input
              variant={"filled"}
              bgColor={"coolGray.100"}
              inputMode="none"
              textContentType="countryName"
              onPressIn={() => setShow(true)}
              value={country && country.name.en}
              InputLeftElement={
                country === null ? (
                  <IconButton
                    icon={<Icon as={<MaterialIcons name="flag" />} />}
                  />
                ) : (
                  <Button variant={"ghost"}>{country.flag}</Button>
                )
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              Which news categories interest you most?
            </FormControl.Label>
            <Box display={"flex"} flexDirection="row" flexWrap={"wrap"}>
              {newsCategories.slice(1).map((item, i) => {
                return (
                  <Button
                    key={i}
                    margin={2}
                    variant={
                      formData.favoriteCategories.includes(item.title)
                        ? "solid"
                        : "subtle"
                    }
                    colorScheme={"coolGray"}
                    rounded="3xl"
                    leftIcon={
                      <Icon as={MaterialIcons} name={item.iconName} size="sm" />
                    }
                    onPress={() =>
                      formData.favoriteCategories.includes(item.title)
                        ? removeCategory(item)
                        : setFormData({
                            ...formData,
                            favoriteCategories: [
                              ...formData.favoriteCategories,
                              item.title,
                            ],
                          })
                    }
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          </FormControl>
        </VStack>
      </Box>
      <Button
        mt={10}
        onPress={() => setCurrentUser(formData)}
        isDisabled={
          formData.username === "" || formData.favoriteCategories.length == 0
            ? true
            : false
        }
      >
        Next
      </Button>
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountry(item);
          setShow(false);
        }}
      />
    </Box>
  );
};

export default Tour2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: `${colors.white}`,
    padding: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
});
