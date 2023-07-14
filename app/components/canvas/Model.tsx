import React, { forwardRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = forwardRef((props) => {
  const gltf = useLoader(GLTFLoader, '/dev.glb')
  return <primitive object={gltf.scene} scale={1} {...props} />
})
Model.displayName = 'Model'

export { Model }
