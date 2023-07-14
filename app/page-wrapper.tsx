'use client'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import path from 'path'
import { Container } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname()
  return (
    <motion.article
      key={path}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Container maxW="container.sm" pt={20} px={5}>
        {children}
      </Container>
    </motion.article>
  )
}
