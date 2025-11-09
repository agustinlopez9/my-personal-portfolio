import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const MyBio = () => {
  return (
    <Box textAlign="center" marginY="4rem" zIndex={1}>
      <Heading
        textAlign="left"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        marginBottom="2rem"
        paddingBottom={{ base: "2rem", lg: "0.5rem" }}
      >
        About me
      </Heading>
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        alignItems="center"
        gap="5rem"
      >
        <Text
          textAlign="justify"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          color="gray.300"
        >
          My journey began in 2020, since then I've been improving my skills and
          knowledge in both Front-end and Back-end libraries such as React,
          Node.js, and Ruby on Rails. My main goal is to deepen into the
          artistic and technical sides of web development to build engaging and
          user-friendly applications.
        </Text>
        <Image
          src="src/assets/profile.jpeg"
          alt="profile.jpeg"
          width="250px"
          pointerEvents="none"
          borderRadius="full"
        />
      </Flex>
    </Box>
  );
};

export default MyBio;
