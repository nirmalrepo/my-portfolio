"use client";
import { ReactNode, forwardRef, Ref } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export interface NavItem {
  label: string;
  href: string;
}

export const Links: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
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

const NavLink = forwardRef<HTMLAnchorElement, any>((props, ref) => (
  <Link as={NextLink} href={`${props.href}`} ref={ref} {...props} />
));

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container
          display="flex"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="auto"
          maxW="container.md"
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
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
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
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
