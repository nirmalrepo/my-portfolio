import {
  FC,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  Ref,
  Suspense,
} from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Three } from '@/app/helpers/Three'
import { Color } from 'three'

interface ViewProps {
  children: ReactNode
  orbit?: boolean
}

export interface ViewRef {
  current: any // Replace 'any' with the correct type once it's resolved
}

const View: FC<ViewProps> = forwardRef<ViewRef, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<any>(null)
    useImperativeHandle(ref, () => ({
      current: localRef.current,
    }))

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          {children}
          {orbit && <OrbitControls />}
        </Three>
      </>
    )
  }
)

View.displayName = 'View'

export { View }
interface CommonProps {
  color?: [number, number, number] | undefined
}

export const Common: FC<CommonProps> = ({ color }) => (
  <Suspense fallback={null}>
    {color && (
      <color attach="background" args={color as [number, number, number]} />
    )}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)
