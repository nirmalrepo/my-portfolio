import {
  FC,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useLayoutEffect,
  useState,
} from 'react'
import { OrbitControls, OrthographicCamera, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

interface ViewProps {
  children: ReactNode
  orbit?: boolean
}

export interface ViewRef {
  current: any // Replace 'any' with the correct type once it's resolved
}

const View: FC<ViewProps> = forwardRef<ViewRef, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const [zoom, setZoom] = useState(16)
    const localRef = useRef<any>(null)
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
        <div ref={localRef} {...props} />
        <Canvas>
          <OrthographicCamera
            zoom={zoom}
            makeDefault={true}
            far={100000}
            near={-100000}
            position={[6.56636, 5, 9.4139]}
          />
          <ambientLight intensity={4} color={'0xcccccc'} />
          {children}
          {orbit && <OrbitControls autoRotate />}
          <Preload all />
        </Canvas>
      </>
    )
  }
)

View.displayName = 'View'

export { View }
