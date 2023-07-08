"use client";
import { ReactNode, forwardRef, Ref, useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import {
  Box,
  Text,
  HStack,
  IconButton,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Container,
  useTheme,
  chakra,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import useSoundEffect from "../hooks/useSoundEffect";
import useSound from "use-sound";
export interface NavItem {
  label: string;
  href: string;
}

export const Links: NavItem[] = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Hobbies",
    href: "/hobbies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
const LogoImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["fill", "src", "alt"].includes(prop),
});
export const NavLink = forwardRef<HTMLAnchorElement, any>((props, ref) => {
  const pathname = usePathname();
  const isActive = pathname.toLowerCase() === props.href.toLowerCase();
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const activeHoverColor = useColorModeValue("hotPink.500", "mint.500");
  const soundUrl = "/sounds/camera-shutter-click.mp3";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      as={NextLink}
      href={`${props.href}`}
      ref={ref}
      {...props}
      bg={isActive ? activeHoverColor : undefined}
      px={4}
      py={2}
      rounded={"full"}
      color={isActive ? "#202023" : inactiveColor}
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
    />
  );
});
NavLink.displayName = "NavLink";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("sounds/switch-on.mp3");
  const toggleColorModeWithSound = () => {
    play(); // Play the sound effect
    toggleColorMode(); // Toggle the color mode
  };
  const theme = useTheme();
  return (
    <>
      <Box
        position="fixed"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        px={4}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
      >
        <Container
          display="flex"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="auto"
          maxW="container.md"
        >
          <HStack spacing={8} alignItems={"center"}>
            <NextLink href="/" scroll={false}>
              <Box
                flexShrink={0}
                display={{ md: "flex" }}
                py={5}
                alignItems="center"
              >
                {/* <Box
                  w="30px"
                  h="30px"
                  display="none"
                  overflow="hidden"
                  position="relative"
                >
                  <LogoImage
                    src="/images/logo.png"
                    fill="true"
                    alt="Logo Image"
                  />
                </Box> */}
                <Text
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  fontFamily={theme.fonts.heading}
                  fontWeight="bold"
                  ml={3}
                >
                  Nirmal Fernando
                </Text>
              </Box>
            </NextLink>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack spacing={{ md: "8" }} alignItems={"center"}>
            <Box>
              <IconButton
                aria-label="Toggle theme mode"
                colorScheme={useColorModeValue("tiffanyBlue", "hotYellow")}
                onClick={toggleColorModeWithSound}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </Box>

            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
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
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
        </Container>
      </Box>
    </>
  );
}
