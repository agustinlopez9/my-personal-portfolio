import React from "react";
import { Box, List, Text, Timeline } from "@chakra-ui/react";
import CustomTag from "./CustomTag";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  tools?: string[];
  tasks?: string[];
}

const TimelineItem = ({
  icon,
  title,
  description,
  date,
  tools = [],
  tasks = [],
}: TimelineItemProps) => {
  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator bg="blue.900">{icon}</Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content marginBottom="1rem">
        <Timeline.Title fontSize="lg">{title}</Timeline.Title>
        <Timeline.Description fontSize="sm" marginY="0.125rem" color="cyan.400">
          {date}
        </Timeline.Description>
        <Text fontSize="md" marginBottom="0.5rem">
          {description}
        </Text>
        {!!tasks.length && (
          <List.Root
            fontSize="md"
            paddingInlineStart="1rem"
            marginBottom="1rem"
          >
            {tasks.map((task, index) => (
              <List.Item key={index}>{task}</List.Item>
            ))}
          </List.Root>
        )}
        <Box
          display={"flex"}
          flexWrap="wrap"
          gap="0.5rem"
          marginBottom="0.5rem"
        >
          {tools.map((tool, index) => (
            <CustomTag key={index} name={tool} />
          ))}
        </Box>
      </Timeline.Content>
    </Timeline.Item>
  );
};

export default TimelineItem;
