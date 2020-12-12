import React from "react";
import fetchClient from "../../config/fetchClient";
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
  MdQueue,
  MdSearch,
  MdSettings,
} from "react-icons/md";

function Home() {
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
          {/* conversation item */}
          <Flex p="0.5em 0.5em">
            {/* <Box
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
            </Box> */}
            <Image
              src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/123457820_1245531162446736_5234886905953017316_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=E8lC5vOMnsYAX-gjCO6&_nc_ht=scontent.fhan5-7.fna&tp=27&oh=de71dee2d3563b7882f4b8265b5e6bc1&oe=5FFA39B0"
              alt="Avatar"
              borderRadius="full"
              // boxSize="3em"
            />
            <Box flex="1">
              <Text fontWeight="600">Thằng có ny</Text>
              <Box>
                <Flex alignItems="center">
                  <Text
                    fontWeight="600"
                    fontSize="sm"
                    marginRight="0.25em"
                    maxW="50%"
                    isTruncated
                  >
                    Em xin lỗi anh Mạnh ạdddddddddd
                  </Text>
                  <Text fontWeight="200" color="gray.500" fontSize="xs">
                    15:43
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box flex="1" minH="100%" maxH="100%" bg="teal.400">
        3
      </Box>
    </Flex>
  );
}

export default Home;
