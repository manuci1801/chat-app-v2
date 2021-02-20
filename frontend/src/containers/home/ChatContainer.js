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
  Avatar,
  AvatarBadge,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
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
  MdTab,
  MdVideoCall,
  MdVideocam,
} from "react-icons/md";

const ChatContainer = ({ setIsChat, socket }) => {
  const [isRoom, setIsRoom] = useState(false);

  return (
    <Flex minH="100vh" maxH="100vh" overflow="hidden">
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
          <Flex align="center" py="1em">
            <Avatar src="" mr="0.5em" />
            <Heading size="md" as="h3">
              Some thing ten
            </Heading>
          </Flex>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<MdSearch color="gray.400" size="1.5em" />}
            />
            <Input
              borderColor="gray.400"
              variant="outline"
              // type="tel"
              placeholder="People, groups & messages"
            />
            {/* <InputRightAddon 
              pointerEvents="auto"
              bg="gray.400"
              children={<MdVideoCall size="1.5em" />}
            /> */}
          </InputGroup>
          <HStack p="0.5em" justify="space-between">
            <Flex
              _hover={{ color: "blue.400", cursor: "pointer" }}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Icon as={MdChat} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">
                Chats
              </Text>
            </Flex>
            {/* <Flex
              _hover={{ color: "blue.400", cursor: "pointer" }}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Icon as={MdCall} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">
                Calls
              </Text>
            </Flex> */}
            <Flex
              _hover={{ color: "blue.400", cursor: "pointer" }}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Icon as={MdContacts} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">
                Contacts
              </Text>
            </Flex>
            <Flex
              _hover={{ color: "blue.400", cursor: "pointer" }}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Icon as={MdNotificationsNone} w="1.5em" h="1.5em" />
              <Text mt="0" fontSize="xs">
                Notifications
              </Text>
            </Flex>
          </HStack>
        </Box>
        <Divider orientation="horizontal" borderColor="gray.400" />
        <Box maxH="calc(100% - 10em)" overflowY="scroll">
          <Box>
            <Flex
              align="center"
              justify="space-between"
              p="0.5em"
              _hover={{ cursor: "pointer", bg: "blue.100", opacity: "0.8" }}
            >
              <Avatar size="sm" src="" mr="0.5em">
                <AvatarBadge boxSize="1.25em" bg="green.400" />
              </Avatar>
              <Box>
                <Box className="one-line-text">
                  Lorem ipsum is placeh text commonly used in the graphic,
                </Box>
                <Box
                  className="one-line-text"
                  fontSize="0.75em"
                  color="gray.400"
                >
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </Box>
              </Box>
              <Text fontSize="xs" color="gray.400">
                Fri
              </Text>
            </Flex>
          </Box>
          <Flex
            align="center"
            justify="space-between"
            p="0.5em"
            bg="blue.100"
            _hover={{ cursor: "pointer", bg: "blue.100", opacity: "0.8" }}
          >
            <Avatar size="sm" src="" mr="0.5em">
              <AvatarBadge boxSize="1.25em" bg="green.400" />
            </Avatar>
            <Box>
              <Box className="one-line-text">
                Lorem ipsum is placeh text commonly used in the graphic,
              </Box>
              <Box className="one-line-text" fontSize="0.75em" color="gray.400">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Box>
            </Box>
            <Text fontSize="xs" color="gray.400">
              2021/01/31
            </Text>
          </Flex>
        </Box>
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
        <HStack justify="space-between" p="1em">
          <HStack>
            <Avatar size="md" src="">
              <AvatarBadge boxSize="1.25em" bg="green.400" />
            </Avatar>
            <Heading size="lg" className="one-line-text">
              Manh Tran Van Manh Tran Van Manh Tran Van Manh Tran Van
            </Heading>
          </HStack>

          <HStack spacing="1.5em">
            <Icon
              _hover={{ color: "blue.400", cursor: "pointer" }}
              as={MdCall}
              w="2em"
              h="2em"
            />
            <Icon
              _hover={{ color: "blue.400", cursor: "pointer" }}
              as={MdVideocam}
              w="2em"
              h="2em"
            />
            <Icon
              _hover={{ color: "blue.400", cursor: "pointer" }}
              as={MdTab}
              w="2em"
              h="2em"
            />
          </HStack>
        </HStack>
        <Divider orientation="horizontal" borderColor="gray.400" />
        <Box maxH="calc(100% - 5em)" pb="1em" overflowY="scroll">
          <HStack maxW="70%" align="start" pt="1em" px="1em">
            <Avatar size="sm" src="" />
            <Box>
              <Text
                mr="0.5em"
                bg="gray.200"
                px="0.75em"
                py="0.25em"
                textAlign="justify"
                border="md"
                borderRadius="xl"
              >
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </Text>
            </Box>
          </HStack>
          <HStack
            ml="auto"
            maxW="70%"
            flexDir="row-reverse"
            align="start"
            pt="1em"
            px="1em"
          >
            <Avatar size="sm" src="" />
            <Box>
              <Text
                mr="0.5em"
                bg="gray.200"
                px="0.75em"
                py="0.25em"
                textAlign="justify"
                border="md"
                borderRadius="xl"
              >
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ChatContainer;
