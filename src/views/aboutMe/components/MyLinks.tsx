import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MyLinks = () => {
  return (
    <Box zIndex={0}>
      <Flex marginBottom="2rem" gap="2rem" justifyContent="center">
        <Link
          href="https://github.com/agustinlopez9"
          target="_blank"
          className="hover"
          color="white"
        >
          <FaGithub size="32px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/agustin-lopez-piceda-b556b41b8/"
          target="_blank"
          className="hover"
          color="white"
        >
          <FaLinkedin size="32px" />
        </Link>
        <Link
          href="mailto:fernandopiceda99@gmail.com"
          className="hover"
          color="white"
        >
          <MdEmail size="32px" />
        </Link>
      </Flex>
      <Box className="box-shadow-small">
        <Link
          className="box-shadow-small hover"
          href="src/assets/resume.pdf"
          target="_blank"
          width="100%"
          margin="auto"
          display="block"
          textAlign="center"
          padding="1rem"
          rounded="sm"
          bg="blue.700"
          color="white"
          outline="none"
          shadow="lg"
          zIndex={1}
        >
          My Resume
        </Link>
      </Box>
    </Box>
  );
};

export default MyLinks;
