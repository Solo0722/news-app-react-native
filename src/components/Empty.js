import React from "react";
import { Center, Heading, Image } from "native-base";

const Empty = () => {
  return (
    <Center flex={1} height={"100%"} width={"100%"} paddingTop={100}>
      <Image
        source={require("../assets/images/empty.png")}
        alt="empty"
        width={100}
        height={100}
      />
      <Heading size={"xs"} fontWeight={"hairline"}>
        No news articles to show!
      </Heading>
    </Center>
  );
};

export default Empty;
