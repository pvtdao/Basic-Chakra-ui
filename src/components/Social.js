import { Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";

function Social() {
  return (
    <Stack spacing="24" direction={["column", "row"]}>
      <Icon boxSize="50" as={FaSpotify} />
      <Icon boxSize="50" as={FaLinkedin} />
      <Icon boxSize="50" as={FaGoogle} />
      <Icon boxSize="50" as={FaYoutube} />
    </Stack>
  );
}

export default Social;
