import React from "react";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import MyLinks from "./MyLinks";

const Intro = () => {
  return (
    <Flex maxW="600px" direction="column">
      <Text textStyle="md">Hello! 👋 My name is</Text>
      <Heading className="text-gradient" size="5xl" marginY="1rem">
        Agustin Lopez
      </Heading>
      <Text textStyle="lg" color="gray.300">
        I'm a 25 years old Full-Stack developer specialized in the Front-end, and with a passion for creating intuitive user interfaces and dynamic designs.
      </Text>
      <Flex gap="1rem" marginTop="2rem">
        <Link
          href="src/assets/resume.pdf"
          background="green.400" 
          color="white"
          textDecoration="none"
          transition="all ease-in-out 0.1s"
          fontWeight="bold" 
          paddingX="1.5rem" 
          rounded="full"
          _hover={{ bg: "green.500" }}
        >
          Download CV
        </Link>
        <Button
          background="transparent"
          borderWidth="0.125rem"
          borderColor="blue.600"
          color="blue.600"
          fontWeight="bold"
          paddingX="1.5rem"
          rounded="full"
          _hover={{ bg: "blue.900/50" }}
        >
          View My Work
        </Button>
      </Flex>
      <MyLinks />
    </Flex>
  );
};

export default Intro;
