import React from "react";
import { Box } from "@chakra-ui/react";
import MyBio from "./components/MyBio";
import MyLinks from "./components/MyLinks";
import MyTimeline from "./components/MyTimeline";

const AboutMe = () => {
  return (
    <Box
      id="about-me"
      className="border-gradient"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="blue.950"
      position="relative"
      paddingY="8rem"
    >
      <Box
        position="absolute"
        width="500px"
        height="500px"
        rounded="full"
        bg="blue.900"
        zIndex={0}
        filter="blur(100px)"
      />
      <MyBio />
      <MyLinks />
      <MyTimeline />
    </Box>
  );
};

export default AboutMe;
