"use client";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";
const Home: React.FC = () => {
  return (
    <Box as="main">
      <h1>Home</h1>
      <Link href="/work">Work</Link>
    </Box>
  );
};
export default Home;
