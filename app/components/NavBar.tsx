'use client'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Box,
  Text,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Container,
  useTheme,
  chakra,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import useSound from 'use-sound'
import GreetingText from './GreetingText'
import LinkWithHoverSound from './LinkWithHoverSound'
export interface NavItem {
  label: string
  href: string
}

export const Links: NavItem[] = [
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Hobbies',
    href: '/hobbies',
  },
]
const LogoImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})
export const NavLink = forwardRef<HTMLAnchorElement, any>((props, ref) => {
  const pathname = usePathname()
  const isActive = pathname.toLowerCase() === props.href.toLowerCase()
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeHoverBgColor = useColorModeValue(
    'hotOrange.500',
    'papayaWhip.100'
  )
  const activeHoverTextColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <LinkWithHoverSound
      as={NextLink}
      href={`${props.href}`}
      ref={ref}
      {...props}
      bg={isActive ? activeHoverBgColor : undefined}
      px={4}
      py={2}
      rounded={'full'}
      color={isActive ? activeHoverTextColor : inactiveColor}
    />
  )
})
NavLink.displayName = 'NavLink'

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [play] = useSound('sounds/switch-on.mp3')
  const toggleColorModeWithSound = () => {
    play()
    toggleColorMode()
  }
  const logoImageUrl =
    colorMode === 'light'
      ? '/images/nf-logo-blue.png'
      : '/images/nf-logo-orange.png'
  const theme = useTheme()
  return (
    <>
      <Box
        position="fixed"
        w="100%"
        bg={useColorModeValue('#ffecd140', '#00152480')}
        px={2}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        top={0}
      >
        <Container
          display="flex"
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          mx="auto"
          maxW="800px"
        >
          <HStack spacing={8} alignItems={'center'}>
            <NextLink href="/" scroll={false}>
              <Box py={5} display="flex" alignItems="center" gap={2}>
                <Box w="40px" h="40px" overflow="hidden" position="relative">
                  <LogoImage
                    width="40"
                    height="40"
                    src={logoImageUrl}
                    alt="Logo Image"
                    loading="lazy"
                    boxSize="40px"
                  />
                </Box>
                <Box
                  flexShrink={0}
                  display={{ md: 'flex' }}
                  alignItems="center"
                >
                  <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily={theme.fonts.heading}
                    fontWeight="bold"
                  >
                    Nirmal Fernando
                  </Text>
                  <GreetingText />
                </Box>
              </Box>
            </NextLink>
          </HStack>
          <HStack spacing={{ md: '8' }} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
            <Box>
              <IconButton
                aria-label="Toggle theme mode"
                colorScheme={useColorModeValue('caribbeanCurrent', 'hotOrange')}
                onClick={toggleColorModeWithSound}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Box>

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  {Links.map((link) => (
                    <MenuItem key={link.label} as={NavLink} href={link.href}>
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  )
}
