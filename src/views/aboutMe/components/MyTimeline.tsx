import React from "react";
import { Box, Timeline } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import TimelineItem from "components/common/TimelineItem";

const TimelineData = [
  {
    icon: <MdWork />,
    title: "Full-stack developer",
    company: "Sinaptia",
    date: "March 2022 - Present",
    description:
      "I contributed to various projects in both Front-end and Back-end sides, some of my tasks included",
    tasks: [
      "Designing an admin dashboard panel for managing user roles and permissions, built with React, Node.js and AWS using Lambda functions.",
      "Building endpoints for a Node.js RESTful API.",
      "Helping in maintenance of a Ruby on Rails application.",
      "Creating new features for a better user experience, fixing bugs and writing tests in a React.js application.",
    ],
    tools: [
      "React",
      "TypeScript",
      "Tailwind",
      "Emotion",
      "Material UI",
      "Node.js",
      "Ruby on Rails",
      "Express",
      "GraphQL",
      "PostgreSQL",
      "Jest",
      "Cypress",
      "AWS",
    ],
  },
  {
    icon: <MdWork />,
    title: "Front-end developer",
    company: "HackCTF",
    date: "December 2020 - March 2022",
    description:
      "I helped develop a platform for learning and practicing cybersecurity skills through different hacking challenges.",
    tools: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
  },
];

const MyTimeline = () => {
  return (
    <Box marginY="4rem" width="full">
      <Timeline.Root width="full" size="xl">
        {TimelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </Timeline.Root>
    </Box>
  );
};

export default MyTimeline;
