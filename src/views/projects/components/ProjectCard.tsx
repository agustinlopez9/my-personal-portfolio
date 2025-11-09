import React from "react";
import { Card, Flex, Image, Link } from "@chakra-ui/react";
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
      bg="gray.900/50"
      borderColor="gray.900"
      color="white"
      rounded="xl"
    >
      <Image
        minHeight="200px"
        src={image}
        alt="Green double couch with wooden legs"
        roundedTop="xl"
      />
      <Card.Body padding="1rem" gap="1rem">
        <Card.Title>{title}</Card.Title>
        <Card.Description color="gray.300">{shortBio}</Card.Description>
        <Flex gap="0.5rem" flexWrap="wrap">
          {techStack.map((item) => (
            <CustomTag key={item} name={item} rounded="md" />
          ))}
        </Flex>
      </Card.Body>
      <Card.Footer gap="2">
        {/*         <Link href={githubRepo} padding="2rem" bg="blue.600">GitHub Repo</Link>
        {website && <Link href={website}>Live Website</Link>} */}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
