import React from "react";
import { Box, Timeline } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import TimelineItem from "views/aboutMe/components/TimelineItem";

const TimelineData = [
  {
    icon: <MdWork />,
    title: "Full-stack developer",
    company: "Sinaptia",
    date: "March 2022 - Present",
    description:
      "I have worked on multiple projects, contributing to both front-end and back-end development. My key achievements included:",
    tasks: [
      "Designed and built an admin dashboard for user role management and permissions, using React, Node.js, and AWS Lambda functions.",
      "Developed and maintained RESTful API endpoints in Node.js, integrating them with existing microservices.",
      "Enhanced an e-commerce Ruby on Rails application by optimizing SQL queries, refactoring legacy code, and resolving performance bottlenecks, resulting in faster page loads and improved scalability.",
      "Delivered new features that improved user experience, debugged complex front-end issues, and wrote automated tests in a React.js application.",
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
      "Cypress",
      "Jest",
      "AWS",
    ],
  },
  {
    icon: <MdWork />,
    title: "Front-end developer",
    company: "HackCTF",
    date: "December 2020 - March 2022",
    description: `I designed and developed a platform for learning and practicing cybersecurity skills through interactive hacking challenges. The platform was showcased at the EkoParty cybersecurity conference, where it won both the "Best Challenge" and "Revelation" awards.`,
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
