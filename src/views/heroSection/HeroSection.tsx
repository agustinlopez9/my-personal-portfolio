import React from "react";
import { Flex } from "@chakra-ui/react";
import Intro from "./components/Intro";
import Terminal from "./components/Terminal";

const HeroSection = () => {
  return (
    <Flex
      position="relative"
      align="center"
      justify="center"
      gap="4rem"
      height="100vh"
      minHeight="650px"
      maxHeight="1200px"
      overflow="hidden"
    >
      <Intro />
      <Terminal />
    </Flex>
  );
};

export default HeroSection;
