'use client'
import { Providers } from './providers'
import NavBar from './components/NavBar'
import { PageWrapper } from './page-wrapper'
import { AnimatePresence } from 'framer-motion'
import DevVoxel from './components/DevVoxel'
import NextImage from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Providers>
          <NavBar />
          <DevVoxel />
          <AnimatePresence mode="wait">
            <PageWrapper>{children}</PageWrapper>
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  )
}
