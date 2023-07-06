'use client'
import { Providers } from './providers'
import NavBar from './components/NavBar'
import { PageWrapper } from './page-wrapper'

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
          <PageWrapper>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  )
}
