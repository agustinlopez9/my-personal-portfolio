import React from "react";
import { Separator, Tabs } from "@chakra-ui/react";
import TabsContent from "./TabsContent";
import { Category, tabEntries } from "../interfaces";

const TabsSection = () => {
  return (
    <Tabs.Root defaultValue={tabEntries[0]} variant="subtle" width="100%">
      <Tabs.List
        flexWrap="wrap"
        gap="1rem"
        borderColor="gray.800"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        {tabEntries.map((tab, index) => (
          <Tabs.Trigger
            key={index}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            border="2px solid transparent"
            _hover={{
              bg: "gray.900/50",
              color: "white",
            }}
            _selected={{
              bg: "green.400",
              color: "black",
              fontWeight: "semibold",
            }}
            _focus={{
              borderColor: "green.400/50",
              outline: "none",
            }}
            rounded="xl"
            padding="1rem 1.5rem"
            paddingY="1rem"
            transition="all ease-in-out 0.2s"
            value={tab}
          >
            {Category[tab]}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Separator marginY="1rem" />
      {tabEntries.map((category) => (
        <TabsContent key={category} category={category} />
      ))}
    </Tabs.Root>
  );
};

export default TabsSection;
