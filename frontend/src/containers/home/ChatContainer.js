import React from "react";
import {
  Box,
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
  return (
    <Flex minH="100vh" maxH="100vh">
      <Box w={{ base: "4em", md: "4em", xl: "20em" }} minH="100%" maxH="100%">
        {/* Left Header */}
        <Flex p="0.5em 1em" justify="space-between">
          <Flex alignItems="center">
            <Box borderRadius="50%" marginRight="0.3em" overflow="hidden">
              <Image
                src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/79324854_1376644895846630_2517586790987071488_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=zuKBfMmAlTkAX-CXQht&_nc_ht=scontent.fhan5-1.fna&tp=27&oh=e8b853685349aa20bfc708a819853478&oe=5FFA3659"
                alt="Avatar"
              />
            </Box>
            <Box>
              <Text fontSize="xl" as="samp" fontWeight="800">
                Chat
              </Text>
            </Box>
          </Flex>
          <HStack spacing="1em">
            <Box rounded="md" bg="gray.100" p="0.25em">
              <Icon as={MdSettings} boxSize={6} />
            </Box>
            <Box rounded="md" bg="gray.100" p="0.25em">
              <Icon as={MdContacts} boxSize={6} />
            </Box>
            <Box rounded="md" bg="gray.100" p="0.25em">
              <Icon as={MdChat} boxSize={6} />
            </Box>
          </HStack>
        </Flex>
        {/* Tìm kiếm */}
        <Box p="0.25em 1em">
          <InputGroup bg="gray.100" rounded="md">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<Icon as={MdSearch} boxSize={6} />}
            />
            <Input type="Text" placeholder="Tìm kiếm trên Messenger" />
          </InputGroup>
        </Box>
        {/* conversations list */}
        <Box m="0.5em 0.5em">
          {/* Conversation Item */}
          <Flex p="0.5em 0.5em">
            <Box
              borderRadius="50%"
              w="3em"
              overflow="hidden"
              alignItems="center"
            >
              <Image
                src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/123457820_1245531162446736_5234886905953017316_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=E8lC5vOMnsYAX-gjCO6&_nc_ht=scontent.fhan5-7.fna&tp=27&oh=de71dee2d3563b7882f4b8265b5e6bc1&oe=5FFA39B0"
                alt="Avatar"
                boxSize="3em"
              />
            </Box>
            <Box flex="1" paddingLeft="0.5em">
              <Flex flexDirection="column">
                <Box>
                  <Text fontWeight="600">Thằng có ny</Text>
                </Box>
                <Box flexDirection="row">
                  <Flex alignItems="center">
                    <Box maxW="11em" marginRight="0.2em">
                      <Text isTruncated fontWeight="600">
                        asdasdasdasdsadsadasdasdasdsdsad
                      </Text>
                    </Box>
                    <Box w="auto">
                      <Text fontWeight="200" color="gray.500" fontSize="xs">
                        15:43
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box justifyContent="center" paddingTop="0.4em">
              {/* <Icon as={MdMoreHoriz} boxSize={5} /> */}
              <Icon as={MdFiberManualRecord} boxSize={4} color="blue.500" />
            </Box>
          </Flex>
          {/* Conversation Item */}
          <Flex p="0.5em 0.5em">
            <Box
              borderRadius="50%"
              w="3em"
              overflow="hidden"
              alignItems="center"
            >
              <Image
                src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/123457820_1245531162446736_5234886905953017316_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=E8lC5vOMnsYAX-gjCO6&_nc_ht=scontent.fhan5-7.fna&tp=27&oh=de71dee2d3563b7882f4b8265b5e6bc1&oe=5FFA39B0"
                alt="Avatar"
                boxSize="3em"
              />
            </Box>
            <Box flex="1" paddingLeft="0.5em">
              <Flex flexDirection="column">
                <Box>
                  <Text fontWeight="400">Idol Huy</Text>
                </Box>
                <Box flexDirection="row">
                  <Flex alignItems="center">
                    <Box maxW="11em" marginRight="0.2em">
                      <Text isTruncated fontWeight="400">
                        asdasdd
                      </Text>
                    </Box>
                    <Box w="auto">
                      <Text fontWeight="200" color="gray.500" fontSize="xs">
                        15:43
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box justifyContent="center" paddingTop="0.4em">
              <Icon as={MdMoreHoriz} boxSize={5} />
              {/* <Icon as={MdFiberManualRecord} boxSize={4} color="blue.500" /> */}
            </Box>
          </Flex>
          {/* Conversation Item */}
          <Flex p="0.5em 0.5em">
            <Box
              borderRadius="50%"
              w="3em"
              overflow="hidden"
              alignItems="center"
            >
              <Image
                src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/123457820_1245531162446736_5234886905953017316_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=E8lC5vOMnsYAX-gjCO6&_nc_ht=scontent.fhan5-7.fna&tp=27&oh=de71dee2d3563b7882f4b8265b5e6bc1&oe=5FFA39B0"
                alt="Avatar"
                boxSize="3em"
              />
            </Box>
            <Box flex="1" paddingLeft="0.5em">
              <Flex flexDirection="column">
                <Box>
                  <Text fontWeight="400">Nam óc chó</Text>
                </Box>
                <Box flexDirection="row">
                  <Flex alignItems="center">
                    <Box maxW="11em" marginRight="0.2em">
                      <Text isTruncated fontWeight="400">
                        asdasddaloaloal
                      </Text>
                    </Box>
                    <Box w="auto">
                      <Text fontWeight="200" color="gray.500" fontSize="xs">
                        15:43
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box justifyContent="center" paddingTop="0.4em">
              <Icon as={MdMoreHoriz} boxSize={5} />
              {/* <Icon as={MdFiberManualRecord} boxSize={4} color="blue.500" /> */}
            </Box>
          </Flex>
          {/* Conversation Item */}
          <Flex p="0.5em 0.5em">
            <Box
              borderRadius="50%"
              w="3em"
              overflow="hidden"
              alignItems="center"
            >
              <Image
                src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/123457820_1245531162446736_5234886905953017316_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=E8lC5vOMnsYAX-gjCO6&_nc_ht=scontent.fhan5-7.fna&tp=27&oh=de71dee2d3563b7882f4b8265b5e6bc1&oe=5FFA39B0"
                alt="Avatar"
                boxSize="3em"
              />
            </Box>
            <Box flex="1" paddingLeft="0.5em">
              <Flex flexDirection="column">
                <Box>
                  <Text fontWeight="400">Tuấn gánh team</Text>
                </Box>
                <Box flexDirection="row">
                  <Flex alignItems="center">
                    <Box maxW="11em" marginRight="0.2em">
                      <Text isTruncated fontWeight="400">
                        asdasdd123213321f
                      </Text>
                    </Box>
                    <Box w="auto">
                      <Text fontWeight="200" color="gray.500" fontSize="xs">
                        15:43
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box justifyContent="center" paddingTop="0.4em">
              <Icon as={MdMoreHoriz} boxSize={5} />
              {/* <Icon as={MdFiberManualRecord} boxSize={4} color="blue.500" /> */}
            </Box>
          </Flex>
        </Box>
      </Box>
      {/*  */}
      <Box flex="1" minH="100%" maxH="100%">
        {/* Right Header */}
        <Flex p="0.5em 1em" justify="space-between" boxShadow="md">
          <Flex alignItems="center">
            <Box borderRadius="50%" marginRight="0.3em" overflow="hidden">
              <Image
                src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/79324854_1376644895846630_2517586790987071488_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=zuKBfMmAlTkAX-CXQht&_nc_ht=scontent.fhan5-1.fna&tp=27&oh=e8b853685349aa20bfc708a819853478&oe=5FFA3659"
                alt="Avatar"
              />
            </Box>
            <Box>
              <Flex flexDirection="column">
                <Box flex="1">
                  <Text fontSize="md" as="samp" fontWeight="800">
                    Đức Mạnh
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs" as="sup" color="gray.500">
                    Hoạt động 1 phút trước
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <HStack spacing="1em">
            <Box color="blue.500" p="0.25em">
              <Icon as={MdPhone} boxSize={7} />
            </Box>
            <Box onClick={() => setIsChat(false)} color="blue.500" p="0.25em">
              <Icon as={MdVideocam} boxSize={7} />
            </Box>
            <Box color="blue.500" p="0.25em">
              <Icon as={MdInfo} boxSize={7} />
            </Box>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatContainer;
