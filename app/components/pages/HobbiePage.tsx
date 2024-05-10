"use client";
import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import InstagramGrid from "../InstagramGrid";

const HobbiePage: React.FC = () => {
  const linkColor = useColorModeValue("caribbeanCurrent.500", "hotOrange.100");

  return (
    <>
      <Box mt={3} mb={6}>
        <Heading as="h1">Hobbies</Heading>
        <Text>
          Explore the world of my hobbies and stay tuned for more engaging
          content!
        </Text>
      </Box>

      {/* <InstagramGrid /> */}
    </>
  );
};

export default HobbiePage;
