"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="here">
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        Loading
      </div>
    </Html>
  );
}

const VoxModel = dynamic(
  () => import("@/app/components/canvas/Model").then((mod) => mod.Model),
  {
    ssr: false,
    loading: Loader,
  }
);
const View = dynamic(
  () => import("@/app/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: Loader,
  }
);

const DevVoxel = () => {
  return (
    <>
      <Box
        className="voxel-dog"
        m="auto"
        mt={["120px", "120px", "60px"]}
        mb={["-160px", "-300px", "-300px"]}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
      >
        <Canvas>
          <View orbit />
        </Canvas>
      </Box>
    </>
  );
};

export default DevVoxel;
