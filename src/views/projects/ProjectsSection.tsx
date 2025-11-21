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
          fontSize={{ base: "3xl", lg: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          Featured Projects
        </Heading>
        <Text
          color="gray.300"
          fontSize={{ base: "sm", lg: "md" }}
          marginY={{ base: "1rem", lg: "1.5rem" }}
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
