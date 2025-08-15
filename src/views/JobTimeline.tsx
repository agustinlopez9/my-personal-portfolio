import React from "react";
import { Box, Center, Text, Timeline } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";

const JobTimeline = () => {
  return (
    <Box bg="gray.900">
      <Center>
        <Box px={4} py={16} borderRadius="md" shadow="md">
          <Timeline.Root maxW="700px">
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <MdWork />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  Computers and Network Maintenance
                </Timeline.Title>
                <Timeline.Description>
                  April 2018 - June 2018
                </Timeline.Description>
                <Text textStyle="sm">Last year high school internship.</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <MdWork />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>HackCTF</Timeline.Title>
                <Timeline.Description>
                  December 2020 - March 2022
                </Timeline.Description>
                <Text textStyle="sm">
                  Freelance Front-end developer. (React, Tailwind
                  CSS, Firebase).
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <MdWork />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Sinaptia</Timeline.Title>
                <Timeline.Description>
                  March 2022 - Present
                </Timeline.Description>
                <Text textStyle="sm">
                  Full-stack developer. (React, Node.js,
                  TypeScript, PostgreSQL, Ruby on Rails, AWS).
                </Text>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </Box>
      </Center>
    </Box>
  );
};

export default JobTimeline;
