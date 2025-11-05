import React from "react";
import { Box, Flex, Link, List } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box position="fixed" left="0" right="0" zIndex={11} bg="blackAlpha.900" borderBottomColor="gray.800" borderBottomWidth="1px">
      <Box
        maxWidth="1280px"
        mx="auto"
        paddingX="2rem"
        paddingY="0.75rem"
        zIndex={11111}
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
                href="#"
                className="link-hover"
                color="white"
                textDecoration="none"
                outline="none"
              >
                Home
              </Link>
            </List.Item>
            <List.Item>
              <Link
                href="#about-me"
                className="link-hover"
                color="white"
                textDecoration="none"
                outline="none"
              >
                About me
              </Link>
            </List.Item>
            <List.Item>
              <Link
                href="#projects"
                className="link-hover"
                color="white"
                textDecoration="none"
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
