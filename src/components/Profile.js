import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DiHtml5, DiReact, DiSass } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 1024px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" fontSize="4xl">
          4th
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Year student
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontSize="2xl">What i have learnt</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="center"
            alignItems="center"
          >
            <Icon w="24" h="24" p="0" as={DiReact}></Icon>
            <Text p="4" fontSize="xl" fontWeight="semibld">
              React JS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="#e52"
            h="30vh"
            w="30vh"
            justify="center"
            alignItems="center"
            // _hover={{ bg: "teal.100" }}
          >
            <Icon w="24" h="24" p="0" as={DiHtml5}></Icon>
            <Text p="4" fontSize="xl" fontWeight="semibld">
              HTML5
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="#d69"
            h="30vh"
            w="30vh"
            justify="center"
            alignItems="center"
            // _hover={{ bg: "green.100" }}
          >
            <Icon w="24" h="24" p="0" as={DiSass}></Icon>
            <Text p="4" fontSize="xl" fontWeight="semibld">
              Sass
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
