"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  OrthographicCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import DevModel from "./DevModel";
const Model = () => {
  const gltf = useLoader(GLTFLoader, "/developer-latest.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.7} />
    </>
  );
};
const View = dynamic(
  () => import("@/app/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <p>Loading</p>,
  }
);
const Common = dynamic(
  () => import("@/app/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);
const DevVoxel = () => {
  return (
    <>
      <Box
        className="voxel-dog"
        m="auto"
        mt={["-20px", "-60px", "-120px"]}
        mb={["-40px", "-140px", "-200px"]}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1} color={"#cccccc"} />
            <Model />
            <OrbitControls autoRotate />
            <OrthographicCamera
              // zoom={100}
              top={200}
              bottom={-200}
              left={200}
              right={-200}
              near={1}
              far={2000}
              position={[0, 0, 200]}
            />
            {/* <Environment preset="sunset" /> */}
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default DevVoxel;
