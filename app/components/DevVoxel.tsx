'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import { Html, useProgress } from '@react-three/drei'
// import { View } from '@/app/components/canvas/View'
// import { Model } from '@/app/components/canvas/Model'
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="here">{progress} % loaded</div>
    </Html>
  )
}

const VoxModel = dynamic(
  () => import('@/app/components/canvas/Model').then((mod) => mod.Model),
  {
    ssr: false,
    loading: Loader,
  }
)
const View = dynamic(
  () => import('@/app/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
  }
)

const DevVoxel = () => {
  return (
    <>
      <Box
        className="voxel-dog"
        m="auto"
        mt={['0px', '-60px', '-120px']}
        mb={['-100px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
      >
        <View orbit>
          <Suspense fallback={null}>
            <VoxModel />
          </Suspense>
        </View>
      </Box>
    </>
  )
}

export default DevVoxel
