import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/dev.glb");
  const [frame, setFrame] = useState(0);
  //   const rotationSpeed = 1000;

  //   useFrame(() => {
  //     // Rotate the model on the first 100 frames
  //     if (frame <= 100) {
  //       const rotationSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
  //       groupRef.current.rotation.y += rotationSpeed;
  //       setFrame(frame + 1);
  //     }
  //   });
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
}

useGLTF.preload("/dev.glb");
