import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TabsSection from "./components/TabsSection";

const ProjectsSection = () => {
  return (
    <Flex
      id="projects"
      direction="column"
      maxWidth="1280px"
      padding={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
      margin="auto"
    >
      <Box marginBottom="3rem" marginTop="4rem">
        <Heading
          fontSize={{ base: "4xl", xl: "5xl" }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          Featured Projects
        </Heading>
        <Text
          fontSize={{ base: "md", xl: "lg" }}
          color="gray.300"
          marginY="2rem"
        >
          Explore my latest work across frontend, backend, design, and coding
          challenges
        </Text>
      </Box>
      <TabsSection />
    </Flex>
  );
};

export default ProjectsSection;
