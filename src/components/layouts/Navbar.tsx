import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { default as Logo } from "assets/logo.png";

const Navbar = () => {
  return (
    <Box bg="black">
      <Box width="100%" maxW="1280px" mx="auto" p={3} color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Box borderRight="1px solid white" paddingRight={1}>
              <img src={Logo} alt="Logo" width="32" />
            </Box>
            <Box paddingLeft={2}>
              <p>Agustin Lopez</p>
            </Box>
          </Flex>
          <ul>
            <Flex flexDirection="row" gap="5">
              <li>About me</li>
              <li>Projects</li>
            </Flex>
          </ul>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
