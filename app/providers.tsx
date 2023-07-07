'use client'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  extendTheme,
  ChakraProvider,
  ColorModeScript,
  StyleFunctionProps,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { M_PLUS_Rounded_1c, Noto_Sans_Sinhala } from 'next/font/google'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#eef0db', '#202023')(props),
    },
  }),
}
const colors = {
  seascape: {
    50: '#90e3e2',
    100: '#7adcdc',
    200: '#68d5d4',
    300: '#55cdc9',
    400: '#44c6be',
    500: '#a0e7e5 ',
    600: '#39bfb2',
    700: '#29b8a7',
    800: '#1fae9b',
    900: '#16a78e',
  },
  blossomGarden: {
    50: '#faf3fa',
    100: '#f2e1f2',
    200: '#eacfe9',
    300: '#e2bde1',
    400: '#dba9da',
    500: '#e5a0e7', // Original Color
    600: '#d58ad5',
    700: '#c378c3',
    800: '#b266b2',
    900: '#a154a1',
  },
  RosyBlush: {
    50: '#f7dcd9',
    100: '#f4cbc9',
    200: '#f0b8b8',
    300: '#eda7a8',
    400: '#ea9698',
    500: '#E7A0A2',
    600: '#E7A0A2', // Original Color
    700: '#e38e8d',
    800: '#df7c7c',
    900: '#dc6a6b',
  },
  goldenGlow: {
    50: '#f7f7de',
    100: '#f1f0c4',
    200: '#ebeaa8',
    300: '#e4e58d',
    400: '#dedd76',
    500: '#e7e5a0',
    600: '#e7e5a0', // Original Color
    700: '#e0de83',
    800: '#dad85f',
    900: '#d3d43e',
  },
}
const M_Plus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '400',
})

const Noto_Sans_Sin = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  weight: '400',
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const fonts = {
  heading: M_Plus.style.fontFamily,
  sinhala: Noto_Sans_Sin.style.fontFamily,
}
const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
})
const emotionCache = createCache({
  key: 'emotion-cache',
  prepend: true,
})
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
