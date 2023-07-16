"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
function Loader() {
  const loaderStyles = {
    marginTop: "-200%",
  };
  return (
    <Html center>
      <div className="here" style={loaderStyles}>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(27.5,27.5)">
            <rect x="-17.5" y="-17.5" width="35" height="35" fill="#00477a">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="0.8928571428571428s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.26785714285714285s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(72.5,27.5)">
            <rect x="-17.5" y="-17.5" width="35" height="35" fill="#15616d">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="0.8928571428571428s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.17857142857142858s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(27.5,72.5)">
            <rect x="-17.5" y="-17.5" width="35" height="35" fill="#ffddad">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="0.8928571428571428s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="0s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(72.5,72.5)">
            <rect x="-17.5" y="-17.5" width="35" height="35" fill="#ff7d00">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="0.8928571428571428s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.08928571428571429s"
              ></animateTransform>
            </rect>
          </g>
        </svg>
      </div>
    </Html>
  );
}

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
        mt={["100px", "120px", "20px"]}
        mb={["-160px", "-300px", "-280px"]}
        w={["100%", 480, 640]}
        h={["280", 480, 640]}
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
