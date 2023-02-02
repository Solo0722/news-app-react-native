import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  VStack,
} from "native-base";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";
import moment from "moment";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

const ArticleDetail = ({ route }) => {
  const { article, category } = route.params;
  const { bookmarkArticle } = useContext(GlobalContext);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        resizeMethod="resize"
        source={{ uri: article.urlToImage }}
        style={styles.imgContainer}
      >
        <View style={styles.secondaryContainer}>
          <VStack space={4} marginBottom={20}>
            <Center
              padding={2}
              backgroundColor={"rgba(255,255,255,0.4)"}
              borderRadius={20}
              width="1/4"
            >
              <Heading color={"white"} fontWeight={"hairline"} size="xs">
                {category.trim().toLowerCase()}
              </Heading>
            </Center>
            <Heading color={"white"} fontWeight={"extrabold"} size="md">
              {article.title}
            </Heading>
          </VStack>
        </View>
      </ImageBackground>
      <Box style={styles.bodyContainer}>
        <Center style={styles.infoContainer}>
          <HStack space={"md"}>
            <Button
              minWidth={50}
              variant={"subtle"}
              rounded={"2xl"}
              backgroundColor={"coolGray.200"}
              // color={"coolGray.900"}
              colorScheme={"warmGray"}
              leftIcon={
                <Icon as={MaterialIcons} name="access-time" size="sm" />
              }
            >
              {moment(article.publishedAt).fromNow()}
            </Button>
            <Button
              minWidth={50}
              variant={"subtle"}
              rounded={"2xl"}
              backgroundColor={"coolGray.200"}
              // color={"coolGray.900"}
              colorScheme={"warmGray"}
              leftIcon={
                <Icon as={MaterialIcons} name="remove-red-eye" size="sm" />
              }
            >
              {article.source.name}
            </Button>
            <IconButton
              variant={"subtle"}
              rounded={"2xl"}
              backgroundColor={"coolGray.200"}
              // color={"coolGray.900"}
              minWidth={50}
              colorScheme={"warmGray"}
              icon={<Icon as={MaterialIcons} name="bookmark" size="sm" />}
              onPress={() => bookmarkArticle(item, category)}
            />
          </HStack>
        </Center>
        <Center style={styles.main}>
          <Heading
            color={"primary.500"}
            fontWeight={"extrabold"}
            size="xs"
            lineHeight={"lg"}
            mb={5}
          >
            {article.description}
          </Heading>
          <Heading fontWeight={"hairline"} size="xs" lineHeight={"2xl"}>
            {article.content}
          </Heading>
          <Button
            mt={10}
            variant="subtle"
            endIcon={
              <Icon as={MaterialIcons} name="arrow-right-alt" size="sm" />
            }
            size="md"
            onPress={() => Linking.openURL(article.url)}
          >
            Continue reading
          </Button>
        </Center>
      </Box>
    </ScrollView>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: 500,
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9,
  },
  bodyContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: `${colors.white}`,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 99,
    top: -40,
    elevation: 5,
    padding: 20,
  },
  infoContainer: {
    width: "100%",
  },
  main: {
    width: "100%",
    marginTop: 30,
  },
});
