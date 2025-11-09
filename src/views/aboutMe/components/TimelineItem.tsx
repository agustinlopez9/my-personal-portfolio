import React from "react";
import { Box, List, Text, Timeline } from "@chakra-ui/react";
import CustomTag from "../../../components/common/CustomTag";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  description: string;
  date: string;
  tools?: string[];
  tasks?: string[];
}

const TimelineItem = ({
  icon,
  title,
  company,
  description,
  date,
  tools = [],
  tasks = [],
}: TimelineItemProps) => {
  return (
    <Timeline.Item>
      <Timeline.Connector top="1rem">
        <Timeline.Separator />
        <Timeline.Indicator bg="blue.600">{icon}</Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content
        marginBottom="1rem"
        bg="gray.950/50"
        borderWidth="1px"
        borderColor="gray.900"
        transition="all ease-in-out 0.15s"
        _hover={{ borderColor: "blue.600/50" }}
        rounded="xl"
        padding="1rem"
      >
        <Timeline.Description
          className="text-gradient"
          fontSize="sm"
          marginY="0.125rem"
        >
          {date}
        </Timeline.Description>
        <Timeline.Title fontSize="xl">{title}</Timeline.Title>
        <Timeline.Description
          color="green.400"
          fontSize="md"
          marginY="0.125rem"
        >
          {company}
        </Timeline.Description>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.300"
          marginBottom="0.5rem"
        >
          {description}
        </Text>
        {!!tasks.length && (
          <List.Root
            fontSize={{ base: "sm", md: "md" }}
            color="gray.300"
            paddingInlineStart="1rem"
            marginBottom="1rem"
          >
            {tasks.map((task, index) => (
              <List.Item key={index}>{task}</List.Item>
            ))}
          </List.Root>
        )}
        <Box display="flex" flexWrap="wrap" gap="0.5rem" marginBottom="0.5rem">
          {tools.map((tool, index) => (
            <CustomTag key={index} name={tool} />
          ))}
        </Box>
      </Timeline.Content>
    </Timeline.Item>
  );
};

export default TimelineItem;
