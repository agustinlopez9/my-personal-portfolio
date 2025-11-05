import React, { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 10;

const Terminal = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;
    const container = ref.current.getBoundingClientRect();
    const width = container.width;
    const height = container.height;

    // Get mouse position relative to element center
    const centerX = container.left + width / 2;
    const centerY = container.top + height / 2;

    // Calculate distance from center, normalized to -1 to 1
    const mouseX = (event.clientX - centerX) / (width / 2);
    const mouseY = (event.clientY - centerY) / (height / 2);

    // Apply rotations - container tilts away from the mouse position
    const rotateX = mouseY * ROTATION_RANGE;
    const rotateY = -mouseX * ROTATION_RANGE;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    // Reset rotations when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <Box
      position="relative"
      gap="4rem"
      maxWidth="600px"
      style={{
        perspective: "1000px",
      }}
    >
      <Box
        className="background-gradient"
        position="absolute"
        width="600px"
        height="600px"
        bottom="-50%"
        rounded="full"
        zIndex={-1}
        filter="blur(300px)"
      />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
      >
        <Box bg="blackAlpha.700" borderWidth="1px" borderColor="gray.800" lineHeight="1.75rem" width="550px" height="min-content" padding="2rem" rounded="xl">
          <Text color="green.600">// Welcome to my portfolio </Text>
          <br />
            <Text>{`const myInfo =  {`}</Text>
            <Text marginLeft="1rem">{`location: "Buenos Aires, Argentina" `}</Text>
            <Text marginLeft="1rem">{`languages: ["Spanish", "English"]`}</Text>
            <Text marginLeft="1rem">{`softSkills: ["Problem Solving", "Communication", "Teamwork", "Adaptability"], `}</Text>
            <Text marginLeft="1rem">{`wantToLearn: ["Electron", "React Native"] `}</Text>
            <Text>{`}`}</Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Terminal;
