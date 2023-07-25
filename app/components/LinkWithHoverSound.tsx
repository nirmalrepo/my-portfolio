import { Link } from '@chakra-ui/react'
import { forwardRef } from 'react'
import useHoverSoundEffect from '../hooks/useHoverSoundEffect'
const LinkWithHoverSound = forwardRef<HTMLAnchorElement, any>((props, ref) => {
  const { handleMouseEnter, handleMouseLeave } = useHoverSoundEffect()
  return (
    <Link
      ref={ref}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
})

LinkWithHoverSound.displayName = 'LinkWithHoverSound'

export default LinkWithHoverSound
