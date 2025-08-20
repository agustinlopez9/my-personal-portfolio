import React, { useRef } from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import Background from "components/layouts/Background";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 10;

const LandingPage = () => {
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
    <Background>
      <Center>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="4rem"
          maxWidth="1200px"
          marginY="13rem"
          rounded="lg"
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
          >
            <Image
              src="src/assets/text_editor.png"
              alt="text_editor.png"
              className="box-shadow-big"
              rounded="xl"
              opacity={0.9}
            />
          </motion.div>
        </Box>
      </Center>
    </Background>
  );
};

export default LandingPage;
