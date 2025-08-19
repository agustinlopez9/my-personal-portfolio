import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          amplitudeFactor: 0.0,
          xOffset: 0.0,
          yOffset: 0.0,
          size: 1.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Box ref={vantaRef} width="100%">
      {children}
    </Box>
  );
};

export default Background;
