"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { M_PLUS_Rounded_1c } from "next/font/google";
const M_Plus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: "400",
});
const fonts = {
  heading: M_Plus.style.fontFamily,
};
const theme = extendTheme({
  fonts,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
