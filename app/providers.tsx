'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  ChakraProvider,
} from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button, Tabs } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  )
}
