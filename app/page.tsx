"use client";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading } from "@chakra-ui/react";
const Home: React.FC = () => {
  return (
    <Container maxW="container.md">
      <Box display={{ md: "flex" }} py={5}>
        <Heading as="h2" variant="page-title">
          Nirmal Fernando
        </Heading>
      </Box>
    </Container>
  );
};
export default Home;
