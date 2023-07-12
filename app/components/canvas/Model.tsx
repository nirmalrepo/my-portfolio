import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model() {
  const gltf = useLoader(GLTFLoader, '/developer-latest.glb')
  return <primitive object={gltf.scene} scale={0.5} />
}
