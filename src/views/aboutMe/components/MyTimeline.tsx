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
      "I developed full-stack solutions across multiple projects, delivering scalable applications on both frontend and backend. My key achievements included:",
    tasks: [
      "Designed and built an admin dashboard for user role management and permissions, using React, Node.js, and AWS Lambda functions.",
      "Developed robust RESTful API endpoints in Node.js, ensuring seamless data flow and system integration.",
      "Maintained an e-commerce Ruby on Rails application and improved website performance by fixing bugs, refactoring code, and optimizing SQL queries.",
      "Created features that enhanced user experience, resolved complex bugs, and implemented comprehensive testing strategies in a React.js application.",
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
