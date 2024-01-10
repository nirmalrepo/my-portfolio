"use client";
import { Box, Text } from "@chakra-ui/react";
import LinkWithHoverSound from "./LinkWithHoverSound";
import NextLink from "next/link";
const Footer: React.FC = () => {
  return (
    <Box py={8} textAlign="center">
      <Text color="grey">© Copyright 2024 - Nirmal Fernando.</Text>
      <LinkWithHoverSound as={NextLink} href="/privacy-policy" color="grey">
        Privacy Policy
      </LinkWithHoverSound>
    </Box>
  );
};

export default Footer;
