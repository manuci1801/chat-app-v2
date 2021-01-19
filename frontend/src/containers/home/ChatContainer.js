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
  InputRightElement,
  InputRightAddon,
  Text,
  Tooltip,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Icon } from "@chakra-ui/react";
import {
  MdCall,
  MdChat,
  MdContacts,
  MdFiberManualRecord,
  MdInfo,
  MdMoreHoriz,
  MdNotificationsNone,
  MdPhone,
  MdQueue,
  MdSearch,
  MdSettings,
  MdVideoCall,
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
      >
        {/* <Button onClick={() => setIsRoom(true)}>Mess</Button> */}
        <Box px="0.5em">
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
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<MdSearch color="gray.500" size="1.5em" />}
            />
            <Input borderColor="gray.500" variant="outline" type="tel" placeholder="People, groups & messages" />
            {/* <InputRightAddon 
              pointerEvents="auto"
              bg="gray.400"
              children={<MdVideoCall size="1.5em" />}
            /> */}
          </InputGroup>
          <HStack py="1em" px="0.5em" justify="space-between">
            <Flex _hover={{ color: "tomato", cursor: "pointer" }}  align="center" justify="center" flexDir="column">
              <Icon as={MdChat} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">Chats</Text>
            </Flex>
            <Flex _hover={{ color: "tomato", cursor: "pointer" }}  align="center" justify="center" flexDir="column">
              <Icon as={MdCall} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">Calls</Text>
            </Flex>
            <Flex _hover={{ color: "tomato", cursor: "pointer" }}  align="center" justify="center" flexDir="column">
              <Icon as={MdContacts} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">Contacts</Text>
            </Flex>
            <Flex _hover={{ color: "tomato", cursor: "pointer" }}  align="center" justify="center" flexDir="column">
              <Icon as={MdNotificationsNone} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">Notifications</Text>
            </Flex>
          </HStack>
        </Box>
        <Divider orientation="horizontal" borderColor="gray.500" />
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
