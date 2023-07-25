'use client'
import React from 'react'
import { Box, Grid, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import ImageArticle from './ImageArticle'
import LinkWithHoverSound from './LinkWithHoverSound'
const portfolioItems = [
  {
    title: 'My Portfolio',
    thumbnail: '/images/work/my-portfolio/my-portfolio-thumbnail.jpg',
    description:
      'I will take you on a journey through the creation of my portfolio website.',
    link: '/work/my-portfolio',
  },
]

const WorkGrid: React.FC = () => {
  const linkColor = useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')

  return (
    <>
      <Grid templateColumns={['100%', 'repeat(2, 1fr)']} gap={6}>
        {portfolioItems.map((item, index) => (
          <Box key={index}>
            <ImageArticle src={item.thumbnail} alt={item.title} />
            {/* <Heading as="h6" fontWeight="bold" variant="section-sub-heading">
              {item.title}
            </Heading> */}
            <Text mb={3}>{item.description}</Text>
            <LinkWithHoverSound
              as={NextLink}
              href={item.link}
              color={linkColor}
            >
              Read more
            </LinkWithHoverSound>
          </Box>
        ))}
      </Grid>
    </>
  )
}

export default WorkGrid
