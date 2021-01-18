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
        bg="gray.200"
        px="0.5em"
      >
        {/* <Button onClick={() => setIsRoom(true)}>Mess</Button> */}
        <Flex align="center" py="0.5em">
          <Image 
            boxSize="36px"
            objectFit="cover" 
            borderRadius="full" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFLpnetKFyaMFO3SrUmjU4s1Cg94IGGRcjw&usqp=CAU" 
            alt="Avatar"
            mr="0.5em"
          />
          <Text fontSize="md">Some thing ten</Text>
        </Flex>
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
        {/* <Button
          onClick={() => {
            setIsRoom(false);
          }}
        >
          Back
        </Button> */}
      </Box>
    </Flex>
  );
};

export default ChatContainer;
