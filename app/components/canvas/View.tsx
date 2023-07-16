import {
  FC,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useLayoutEffect,
  useState,
  Suspense,
} from 'react'
import { OrbitControls, OrthographicCamera, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import * as THREE from 'three'

interface ViewProps {
  orbit?: boolean
}

export interface ViewRef {
  current: any // Replace 'any' with the correct type once it's resolved
}
function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}
const VoxModel = dynamic(
  () => import('@/app/components/canvas/Model2').then((mod) => mod.Model),
  {
    ssr: false,
  }
)
const View: FC<ViewProps> = forwardRef<ViewRef, ViewProps>(
  ({ orbit, ...props }, ref) => {
    const [zoom, setZoom] = useState(16)
    const localRef = useRef<any>(null)
    const modelRef = useRef<any>(null)
    const controls = useRef<any>(null)
    useImperativeHandle(ref, () => ({
      current: localRef.current,
    }))
    useLayoutEffect(() => {
      const handleResize = () => {
        const canvasWidth = window.innerWidth
        const canvasHeight = window.innerHeight
        const newZoom = calculateZoomLevel(canvasWidth, canvasHeight)
        setZoom(newZoom)
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const frame = useRef(0)
    const target = useRef<THREE.Vector3>(new THREE.Vector3(-0.5, 1.2, 0))
    const initialCameraPosition = useRef<THREE.Vector3>(
      new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )
    )

    useFrame(({ camera }) => {
      frame.current = frame.current <= 100 ? frame.current + 1 : frame.current

      if (frame.current <= 100) {
        const rotSpeed = -easeOutCirc(frame.current / 120) * Math.PI * 20

        camera.position.y = 10
        camera.position.x =
          initialCameraPosition.current.x * Math.cos(rotSpeed) +
          initialCameraPosition.current.z * Math.sin(rotSpeed)
        camera.position.z =
          initialCameraPosition.current.z * Math.cos(rotSpeed) -
          initialCameraPosition.current.x * Math.sin(rotSpeed)
        camera.lookAt(target.current)
      } else {
        controls.current.update()
        camera.lookAt(target.current)
      }
    })
    // Custom function to calculate the zoom level based on canvas dimensions
    const calculateZoomLevel = (width: number, height: number) => {
      const aspectRatio = width / height
      const baseZoom = 16
      const minZoom = 10
      const maxZoom = 20

      let newZoom = baseZoom
      if (aspectRatio < 1) {
        newZoom = baseZoom * aspectRatio
      }
      newZoom = Math.max(minZoom, Math.min(maxZoom, newZoom))

      return newZoom
    }
    return (
      <>
        <Suspense fallback={null}>
          <OrthographicCamera
            zoom={zoom}
            makeDefault={true}
            far={100000}
            near={-100000}
            position={initialCameraPosition.current.toArray()}
          />
          <ambientLight intensity={8} color={new THREE.Color(0xcccccc)} />
          {orbit && <OrbitControls autoRotate ref={controls} />}
          <VoxModel />
          <Preload all />
        </Suspense>
      </>
    )
  }
)

View.displayName = 'View'

export { View }
