import { FC, forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Preload,
  View as ViewImpl,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface ViewProps {
  children: ReactNode;
  orbit?: boolean;
}

export interface ViewRef {
  current: any; // Replace 'any' with the correct type once it's resolved
}

const View: FC<ViewProps> = forwardRef<ViewRef, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
      current: localRef.current,
    }));

    return (
      <>
        <div ref={localRef} {...props} />
        <Canvas>
          <PerspectiveCamera makeDefault position={[6, 6, 6]} />
          <ambientLight intensity={4} color={"0xcccccc"} />
          {children}
          {orbit && <OrbitControls autoRotate />}
          {/* <OrthographicCamera
            zoom={100}
            makeDefault
            near={0.1}
            far={2000}
            position={[5, 5, 5]}
          /> */}

          <Preload all />
        </Canvas>
      </>
    );
  }
);

View.displayName = "View";

export { View };
