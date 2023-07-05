'use client'
import { Providers } from './providers'
import NavBar from './components/NavBar'
import { AnimatePresence } from 'framer-motion'

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
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => console.log('Here')}
          >
            {children}
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  )
}
