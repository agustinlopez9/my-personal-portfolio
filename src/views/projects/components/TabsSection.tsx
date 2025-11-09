import React, { PropsWithChildren } from "react";
import { Separator, Tabs } from "@chakra-ui/react";
import { Category, tabEntries } from "../interfaces";

const TabsSection = ({ children }: PropsWithChildren) => {
  return (
    <Tabs.Root defaultValue="frontend" variant="subtle" width="100%">
      <Tabs.List gap="1rem" borderColor="gray.800">
        {tabEntries.map((tab, index) => (
          <Tabs.Trigger
            key={index}
            fontSize="lg"
            color="gray.300"
            _hover={{ bg: "gray.900/50", color: "white" }}
            _selected={{ bg: "green.400", color: "black" }}
            rounded="xl"
            padding="1rem"
            paddingY="1.5rem"
            transition="all ease-in-out 0.15s"
            value={tab}
          >
            {Category[tab]}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator rounded="xl" bg="green.400" />
      </Tabs.List>
      <Separator marginY="1rem" />
      {children}
    </Tabs.Root>
  );
};

export default TabsSection;
