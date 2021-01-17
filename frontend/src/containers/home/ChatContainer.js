import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Icon } from "@chakra-ui/react";
import {
  MdChat,
  MdContacts,
  MdFiberManualRecord,
  MdInfo,
  MdMoreHoriz,
  MdPhone,
  MdQueue,
  MdSearch,
  MdSettings,
  MdVideocam,
} from "react-icons/md";

const ChatContainer = ({ setIsChat, socket }) => {
  const [isRoom, setIsRoom] = useState(false);

  return (
    <Flex minH="100vh" maxH="100vh">
      <Box
        display={
          !isRoom
            ? { base: "block" }
            : { base: "none", md: "block", xl: "block" }
        }
        w={{ base: "100%", md: "20em", xl: "20em" }}
        bg="tomato"
      >
        <Button onClick={() => setIsRoom(true)}>Mess</Button>
      </Box>
      <Box
        display={
          isRoom
            ? { base: "block" }
            : { base: "none", md: "block", xl: "block" }
        }
        flex="1"
        minH="100%"
        maxH="100%"
      >
        <Button
          onClick={() => {
            setIsRoom(false);
          }}
        >
          Back
        </Button>
      </Box>
    </Flex>
  );
};

export default ChatContainer;
