import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Noto_Sans_Sinhala, Overpass } from 'next/font/google'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#ffecd1', '#001524')(props),
    },
  }),
}
const components = {
  Heading: {
    variants: {
      'section-heading': {
        fontSize: '3xl',
        marginBottom: 4,
        letterSpacing: '1px',
      },
      'section-sub-heading': {
        fontSize: '2xl',
        marginBottom: 4,
        letterSpacing: '1px',
      },
    },
  },
}
const colors = {
  hotOrange: {
    50: '#FFB570',
    100: '#FFAB5C',
    200: '#FFA047',
    300: '#ff9633',
    400: '#FF8B1F',
    500: '#ff7d00',
    600: '#F57600',
    700: '#E06C00',
    800: '#CC6300',
    900: '#B85900',
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
  caribbeanCurrent: {
    50: '#27B7CE',
    100: '#24A8BC',
    200: '#2199AB',
    300: '#1d8a9a',
    400: '#1a7a89',
    500: '#15616D',
    600: '#145c67',
    700: '#104C56',
    800: '#0d3d45',
    900: '#0a2e33',
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
  papayaWhip: {
    50: '#FFF7EB',
    100: '#FFECD1',
    200: '#FFE6C2',
    300: '#FFDDAD',
    400: '#FFD599',
    500: '#FFCC85',
    600: '#FFC370',
    700: '#FFBB5C',
    800: '#FFB347',
    900: '#FFAA33',
  },
}
// const Overpass_Font = Overpass({
//   subsets: ['latin'],
//   weight: '400',
// })
// const Noto_Sans_Sin = Noto_Sans_Sinhala({
//   subsets: ['sinhala'],
//   weight: '400',
// })

// const fonts = {
//   heading: Overpass_Font.style.fontFamily,
//   sinhala: Noto_Sans_Sin.style.fontFamily,
// }

// For Tests
const fonts = {
  heading: `'Open Sans', sans-serif`,
  sinhala: `'Open Sans', sans-serif`,
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})
export default theme
