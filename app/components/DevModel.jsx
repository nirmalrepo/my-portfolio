import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export default function DevModel(props) {
  const { nodes, materials } = useGLTF("/developer-latest.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.developer.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-2.192, -2.01, -2.128]}
        scale={[4.207, 1.587, 4.207]}
      />
    </group>
  );
}

useGLTF.preload("/developer-latest.glb");
