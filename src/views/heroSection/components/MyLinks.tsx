import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const links = [
  {
    url: "https://github.com/agustinlopez9",
    icon: <FaGithub size="32px" />,
  },
  {
    url: "https://www.linkedin.com/in/agustin-lopez-piceda-b556b41b8/",
    icon: <FaLinkedin size="32px" />,
  },
  {
    url: "mailto:fernandopiceda99@gmail.com",
    icon: <MdEmail size="32px" />,
  },
];

const MyLinks = () => {
  return (
    <Flex marginTop="2rem" gap="2rem" justifyContent="start">
      {links.map((link) => (
        <Link
          href={link.url}
          target="_blank"
          className="link-hover"
          color="gray.300"
        >
          {link.icon}
        </Link>
      ))}
    </Flex>
  );
};

export default MyLinks;
