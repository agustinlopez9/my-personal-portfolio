import React from "react";
import { Tabs, Box, Heading, Text } from "@chakra-ui/react";
import NoResults from "./NoResults";
import { projects } from "../mockData";
import { Category, TabName } from "../interfaces";

interface TabsContentProps {
  category: TabName;
}

const TabsContent = ({ category }: TabsContentProps) => {
  const filteredProjects = projects.filter(
    (project) => project.category === Category[category],
  );

  return (
    <Tabs.Content value={category}>
      {filteredProjects.length ? (
        filteredProjects.map((project, index) => (
          <Box
            key={index}
            bg="gray.800"
            padding="1.5rem"
            borderRadius="md"
            marginBottom="1.5rem"
          >
            <Heading fontSize="2xl" marginBottom="0.5rem">
              {project.title}
            </Heading>
            <Text color="gray.300">{project.description}</Text>
            <Text color="green.400" marginTop="0.5rem">
              Technologies: {project.techStack.join(", ")}
            </Text>
          </Box>
        ))
      ) : (
        <NoResults />
      )}
    </Tabs.Content>
  );
};

export default TabsContent;
