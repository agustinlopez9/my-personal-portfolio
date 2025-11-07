import React from "react";
import { Box } from "@chakra-ui/react";
import MyBio from "./components/MyBio";
import MyTimeline from "./components/MyTimeline";

const AboutMe = () => {
  return (
    <Box
      id="about-me"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1280px"
      padding="2rem"
      marginX="auto"
    >
      <MyBio />
      <MyTimeline />
    </Box>
  );
};

export default AboutMe;
