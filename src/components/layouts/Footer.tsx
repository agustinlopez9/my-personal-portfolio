import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box paddingY="4rem" textAlign="center">
      <Text fontSize="sm">
        Do you like my website? See the code{" "}
        <Link
          href="https://github.com/agustinlopez9/my-personal-portfolio"
          target="_blank"
          color="green.400"
        >
          here
        </Link>{" "}
        😄
      </Text>
    </Box>
  );
}
