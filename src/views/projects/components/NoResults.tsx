import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const NoResults = () => {
  return (
    <Box
      minHeight="600px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1.5rem"
      textAlign="center"
    >
      <Box bg="gray.800" borderRadius="full" padding="2rem" opacity={0.8}>
        <FaRocket size={48} color="#4ADE80" />
      </Box>

      <Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="gray.200"
          marginBottom="0.5rem"
        >
          Coming Soon
        </Text>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.400"
          maxWidth="400px"
        >
          Exciting projects are on their way! Check back soon for new
          developments.
        </Text>
      </Box>

      <Box
        width="60px"
        height="2px"
        bg="green.400"
        borderRadius="full"
        opacity={0.8}
      />
    </Box>
  );
};

export default NoResults;
