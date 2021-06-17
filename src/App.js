import {
  VStack,
  Heading,
  Flex,
  IconButton,
  useColorMode,
  Spacer,
  Center,
} from "@chakra-ui/react";

import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex
        w="100%"
        // border="1px"
        // borderColor="gray.200"
      >
        <Center>
          <Heading ml="8" size="md" fontWeight="semiBold" color="black.400">
            PVTD
          </Heading>
        </Center>

        <Spacer />
        <IconButton mr={2} icon={<FaGithub />}></IconButton>
        <IconButton mr={2} icon={<FaFacebook />}></IconButton>
        <IconButton mr={5} icon={<FaInstagram />}></IconButton>
        <IconButton
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
