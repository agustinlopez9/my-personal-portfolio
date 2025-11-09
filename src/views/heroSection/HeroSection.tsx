import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Intro from "./components/Intro";
import Terminal from "./components/Terminal";

const HeroSection = () => {
  return (
    <Box position="relative" overflow="hidden">
      <Flex
        position="relative"
        direction={{ base: "column", xl: "row" }}
        align="center"
        justify="center"
        gap="4rem"
        height="100vh"
        margin="auto"
        maxWidth="1280px"
        minHeight="768px"
        maxHeight="1200px"
      >
        <Box
          className="background-gradient spin-and-expand"
          opacity="20%"
          position="absolute"
          width="600px"
          right={{ xl: "2.5%" }}
          rounded="full"
          filter="blur(300px)"
          zIndex={-1}
        />
        <Intro />
        <Terminal />
      </Flex>
    </Box>
  );
};

export default HeroSection;
