import React from "react";
import { Flex, Tabs } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
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
        <Flex
          className="slide-up"
          justifyContent="center"
          flexWrap="wrap"
          gap="2rem"
          marginTop="2rem"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              shortBio={project.shortBio}
              techStack={project.techStack}
              githubRepo={project.githubRepo}
              website={project.website}
            />
          ))}
        </Flex>
      ) : (
        <NoResults />
      )}
    </Tabs.Content>
  );
};

export default TabsContent;
