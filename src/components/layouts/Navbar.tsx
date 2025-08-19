import React from "react";
import { Box, Flex, Link, List } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box position="absolute" top="20px" left={0} right={0} zIndex={111}>
      <Box
        className="border-glow"
        width="100%"
        maxWidth="1280px"
        mx="auto"
        bg="blue.950"
        paddingX="2rem"
        paddingY="0.75rem"
        color="white"
        rounded="full"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Box borderRight="1px solid white" paddingRight={1}>
              <img src="src/assets/logo.png" alt="Logo" width="32" />
            </Box>
            <Box paddingLeft={2}>
              <Link href="/" color="white" textDecoration="none">
                Agustin Lopez
              </Link>
            </Box>
          </Flex>
          <List.Root display="flex" flexDirection="row" gap="2rem" unstyled>
            <List.Item>
              <Link
                href="#about-me"
                className="hover"
                color="white"
                outline="none"
              >
                About me
              </Link>
            </List.Item>
            <List.Item>
              <Link
                href="#projects"
                className="hover"
                color="white"
                outline="none"
              >
                Projects
              </Link>
            </List.Item>
          </List.Root>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
