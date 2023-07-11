'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
const View = dynamic(
  () => import('@/app/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <p>Loading</p>,
  }
)
const Common = dynamic(
  () => import('@/app/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
)
const DevVoxel = () => {
  return (
    <>
      <Box>
        <View>
          <Suspense fallback={null}>
            <Common color={'lightblue'} />
          </Suspense>
        </View>
      </Box>
    </>
  )
}

export default DevVoxel
