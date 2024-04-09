"use client";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface InstagramData {
  media_url: string;
  caption: string;
  // Add other properties as needed
}

const InstagramGrid = () => {
  const [data, setData] = useState<InstagramData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/instagram")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Box my={3}>
      <SimpleGrid columns={[1, 2, 3]} gap={1}>
        {/* Assuming the data structure is an array of objects with a property called media_url */}
        {data &&
          data.map((item, index) => (
            <Box key={index} overflow="hidden">
              <img src={item.media_url} alt={item.caption} width="100%" />
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default InstagramGrid;
