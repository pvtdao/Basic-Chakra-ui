import {
  Circle,
  Stack,
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Kiểm tra xem màn hình có lớn hớn 600px không
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  console.log(isNotSmallerScreen);
  return (
    <Stack>
      <Circle
        bg="blue.100"
        w="300px"
        h="300px"
        opacity={isDark ? "0.1" : ".5"}
        position="absolute"
        alignSelf="flex-end"
        zIndex="-1"
      />

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        alignSelf="flex-start"
        spacing="200px"
        p={isNotSmallerScreen ? "32px" : "0"}
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-end">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Dao Phan
          </Text>
          <Text color={isDark ? "gray.200" : "gray.700"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            quae, tempore adipisci laborum et ab recusandae iusto! 🎈🎈
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => {
              window.open("https://pvtdao.github.io/My-Website/");
            }}
          >
            Take a look
          </Button>
        </Box>
        <Image
          alignSelf="center"
          src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/78265365_1376533285843320_3064111045711757312_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dqFvAloJNAUAX8qvgK3&_nc_ht=scontent.fsgn3-1.fna&oh=a54c7ee03bf93ce276c1b297ad9609fb&oe=60CED657"
          borderRadius="full"
          boxSize="300px"
          backgroundColor="transparent"
          boxShadow="lg"
          mb={isNotSmallerScreen ? "0" : "12"}
          mt={isNotSmallerScreen ? "0" : "12"}
        />
      </Flex>
    </Stack>
  );
}

export default Header;
