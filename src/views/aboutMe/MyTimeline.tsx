import React from "react";
import { Box, Text, Timeline } from "@chakra-ui/react";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";

const MyTimeline = () => {
  return (
    <Box paddingY="2rem">
      <Timeline.Root maxW="700px" size="xl">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator bg="blue.800">
              <PiStudentFill />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title fontSize="lg">Computers and Network Maintenance</Timeline.Title>
            <Timeline.Description color="cyan.400">April 2018 - June 2018</Timeline.Description>
            <Text textStyle="sm" marginBottom={6}>Last year high school internship.</Text>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator bg="blue.800">
              <MdWork />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title fontSize="lg">HackCTF</Timeline.Title>
            <Timeline.Description color="cyan.400">
              December 2020 - March 2022
            </Timeline.Description>
            <Text textStyle="sm" marginBottom={6}>
              Front-end developer (React, Tailwind CSS, Firebase).
            </Text>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator bg="blue.800">
              <MdWork />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title fontSize="lg">Sinaptia</Timeline.Title>
            <Timeline.Description color="cyan.400">March 2022 - Present</Timeline.Description>
            <Text textStyle="sm" marginBottom={6}>
              Full-stack developer (React, Node.js, TypeScript, PostgreSQL, Ruby
              on Rails, AWS).
            </Text>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </Box>
  );
};

export default MyTimeline;
