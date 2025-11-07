import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TabsSection from "./components/TabsSection";
import TabsContent from "./components/TabsContent";
import { tabEntries } from "./interfaces";

const ProjectsSection = () => {
  return (
    <Flex
      id="projects"
      direction="column"
      maxWidth="1280px"
      padding="2rem"
      margin="auto"
    >
      <Box marginBottom="3rem" marginTop="4rem">
        <Heading fontSize="5xl" fontWeight="bold">
          Featured Projects
        </Heading>
        <Text fontSize="lg" color="gray.300" marginY="2rem">
          Explore my latest work across frontend, backend, design, and coding
          challenges
        </Text>
      </Box>
      <TabsSection>
        {tabEntries.map((category, index) => (
          <TabsContent key={index} category={category} />
        ))}
      </TabsSection>
    </Flex>
  );
};

export default ProjectsSection;
