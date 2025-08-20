import React from "react";
import { Tag, TagRootProps } from "@chakra-ui/react";

interface CustomTagProps extends TagRootProps {
  name: string;
}

const CustomTag = ({ name, ...props }: CustomTagProps) => {
  return (
    <Tag.Root
      paddingY="0.5rem"
      paddingX="0.5rem"
      bg="blue.900"
      color="white"
      {...props}
    >
      <Tag.Label fontSize="sm">{name}</Tag.Label>
    </Tag.Root>
  );
};

export default CustomTag;
