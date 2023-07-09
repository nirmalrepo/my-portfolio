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
import { M_PLUS_Rounded_1c, Noto_Sans_Sinhala, Nunito } from 'next/font/google'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#fbe7c6', '#202023')(props),
    },
  }),
}
const colors = {
  hotYellow: {
    50: '#faf3e5',
    100: '#f6e6cb',
    200: '#f3d8b1',
    300: '#efcba7',
    400: '#ecbd8e',
    500: '#fbe7c6',
    600: '#e4a979',
    700: '#ce8d61',
    800: '#b7754a',
    900: '#a05e33',
  },
  mint: {
    50: '#e5f9ee',
    100: '#c9f3dd',
    200: '#adfecd',
    300: '#91f7bc',
    400: '#75f2ab',
    500: '#b4f8c8',
    600: '#61e2a1',
    700: '#50c989',
    800: '#3fa071',
    900: '#2f8549',
  },
  tiffanyBlue: {
    50: '#e1f3f4',
    100: '#c3e7e9',
    200: '#a6dbde',
    300: '#88cfd2',
    400: '#6bc3c6',
    500: '#a0e7e5',
    600: '#5abebd',
    700: '#4ca7a6',
    800: '#3e908f',
    900: '#317978',
  },
  hotPink: {
    50: '#ffe6e9',
    100: '#ffd0d9',
    200: '#ffb9ca',
    300: '#ffa2ba',
    400: '#ff8ca9',
    500: '#ffaebc',
    600: '#e68d9d',
    700: '#ca6d7e',
    800: '#ae4c5f',
    900: '#923c4f',
  },
}
const Nunito_Font = Nunito({
  subsets: ['latin'],
  weight: '400',
})
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
  heading: Nunito_Font.style.fontFamily,
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
