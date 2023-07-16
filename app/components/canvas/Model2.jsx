import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/dev.glb");

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.test_3_no_shadows.geometry}
        material={materials.palette}
        position={[0, 0, 1.016]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-4.944, 0, -7.682]}
        scale={[15.503, 207.654, 15.503]}
      />
    </group>
  );
};

Model.displayName = "Model";

export { Model };
useGLTF.preload("/dev.glb");
