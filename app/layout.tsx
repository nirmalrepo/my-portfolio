import { Providers } from './providers'
import NavBar from './components/NavBar'
import DevVoxel from './components/canvas/DevVoxel'
import { AnimatePresenceWrapper } from './components/wrappers/animate-presence-wrapper'
import Footer from './components/Footer'
import HeaderScripts from './components/HeaderScripts'
import FooterScripts from './components/wrappers/FooterScripts'

export const metadata = {
  title:
    'Nirmal Fernando | Fullstack Web Developer, Based in Nelson, New Zealand',
  description: 'Fullstack Web Developer, Based in Nelson, New Zealand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <HeaderScripts />
      </head>
      <body>
        <Providers>
          <NavBar />
          <DevVoxel />
          <AnimatePresenceWrapper>{children}</AnimatePresenceWrapper>
          <Footer />
        </Providers>
        <FooterScripts />
      </body>
    </html>
  )
}
