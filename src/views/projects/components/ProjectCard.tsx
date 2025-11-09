import React from "react";
import { Card, Flex, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CustomTag from "components/common/CustomTag";

interface ProjectCardProps {
  image: string;
  title: string;
  shortBio: string;
  techStack: string[];
  githubRepo: string;
  website?: string;
}

const ProjectCard = ({
  image,
  title,
  shortBio,
  techStack,
  githubRepo,
  website,
}: ProjectCardProps) => {
  return (
    <Card.Root
      maxW="sm"
      bg="gray.950/50"
      borderColor="gray.900"
      _hover={{
        borderColor: "blue.600/50",
        "& .card-image": {
          scale: 1.05,
        },
        "& .card-title": {
          color: "blue.600",
        },
      }}
      overflow="hidden"
      transition="all ease-in-out 0.2s"
      color="white"
      rounded="xl"
      cursor="pointer"
    >
      <Image
        src={image}
        alt={`${title} project screenshot`}
        className="card-image"
        minHeight="200px"
        transition="all ease-in-out 0.2s"
        roundedTop="xl"
      />
      <Card.Body padding="1rem" gap="1rem">
        <Card.Title className="card-title" transition="all ease-in-out 0.2s">
          {title}
        </Card.Title>
        <Card.Description color="gray.300" fontSize="md">
          {shortBio}
        </Card.Description>
        <Flex gap="0.5rem" flexWrap="wrap">
          {techStack.map((item) => (
            <CustomTag key={item} name={item} rounded="md" />
          ))}
        </Flex>
      </Card.Body>
      <Card.Footer
        margin="1rem"
        paddingY="1.5rem"
        gap="2rem"
        display="flex"
        justifyContent="flex-start"
        borderTop="1px solid"
        borderColor="gray.900"
      >
        <Link
          href={githubRepo}
          target="_blank"
          gap="0.5rem"
          color="gray.300"
          rounded="lg"
          fontSize="sm"
          fontWeight="medium"
          _hover={{
            color: "blue.600",
          }}
          transition="all ease-in-out 0.2s"
          textDecoration="none"
        >
          <FaGithub size={16} />
          GitHub
        </Link>
        {website && (
          <Link
            href={website}
            target="_blank"
            gap="0.5rem"
            color="gray.300"
            fontSize="sm"
            fontWeight="medium"
            _hover={{
              color: "green.400",
            }}
            transition="all ease-in-out 0.2s"
            textDecoration="none"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </Link>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
