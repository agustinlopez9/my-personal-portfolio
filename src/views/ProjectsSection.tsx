import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ProjectsSection = () => {
  return (
    <Flex height="600px" justifyContent="center">
      <Box p={4} bg="gray.800" width="280px">
        <Heading as="h1" size="xl" mb={4}>
          Projects
        </Heading>
      </Box>
      <Box bg="gray.200" width="1000px">
        <Heading as="h2" size="lg" mb={4}>
          My Projects
        </Heading>
        <Text>Here are some of the projects I've worked on:</Text>
      </Box>
    </Flex>
  );
};

export default ProjectsSection;
