import React from "react";
import { Tag, TagRootProps } from "@chakra-ui/react";

interface CustomTagProps extends TagRootProps {
  name: string;
}

const CustomTag = ({ name, ...props }: CustomTagProps) => {
  return (
    <Tag.Root
      paddingY="0.5rem"
      paddingX="0.75rem"
      bg="blue.950/50"
      color="blue.600"
      variant="solid"
      rounded="full"
      {...props}
    >
      <Tag.Label fontSize="sm">{name}</Tag.Label>
    </Tag.Root>
  );
};

export default CustomTag;
