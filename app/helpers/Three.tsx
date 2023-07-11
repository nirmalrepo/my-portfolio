import { FC, ReactNode } from 'react'
import { r3f } from '@/app/helpers/global'

interface ThreeProps {
  children: ReactNode
}

export const Three: FC<ThreeProps> = ({ children }) => {
  return <r3f.In>{children}</r3f.In>
}
