import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Bio = () => {
  return (
    <Box textAlign="center" marginY="2rem" maxWidth="1080px" zIndex={1} >
      <Text
        display="inline-block"
        fontSize="xl"
        fontWeight="bold"
        marginBottom="2rem"
        paddingBottom="0.5rem"
        borderBottom="1px solid"
      >
        About me
      </Text>
      <Flex alignItems="center">
        <Text 
          textAlign="justify"
          marginX="2rem"
        >
          I am a dedicated software developer with a passion for creating
          intuitive user interfaces and dynamic designs. My journey began in
          2020, since then I've been improving my skills and knowledge in both
          Front-end and Back-end libraries such as React, Node.js, and Ruby on
          Rails.
          <br />
          My main goal is to deepen into the artistic and technical sides of web
          development to build engaging and user-friendly applications.
        </Text>
        <Image
          src="src/assets/profile.jpeg"
          alt="profile.jpeg"
          width="250px"
          marginX="2rem"
          pointerEvents="none"
          borderRadius="full"
        />
      </Flex>
    </Box>
  );
};

export default Bio;
