import React from "react";
import fetchClient from "../../utils/fetchClient";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

function Home() {
  return (
    <Flex minH="100vh" maxH="100vh">
      <Box
        w={{ base: "4em", md: "20em", xl: "20em" }}
        minH="100%"
        maxH="100%"
        bg="tomato"
      >
        2
      </Box>
      <Box flex="1" minH="100%" maxH="100%" bg="teal.400">
        3
      </Box>
    </Flex>
  );
}

export default Home;
