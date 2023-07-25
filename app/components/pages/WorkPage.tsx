'use client'
import React from 'react'
import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import LinkWithHoverSound from '../LinkWithHoverSound'
import NextLink from 'next/link'
import ImageArticle from '../ImageArticle'

const portfolioItems = [
  {
    title: 'My Portfolio',
    thumbnail: '/images/work/my-portfolio/my-portfolio-thumbnail-image.jpg',
    description:
      'I will take you on a journey through the creation of my portfolio website.',
    link: '/work/my-portfolio',
  },
]

const WorkPage: React.FC = () => {
  const linkColor = useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')

  return (
    <>
      <Box mt={3} mb={6}>
        <Heading as="h1">Work</Heading>
        <Text>
          Stay tuned for exciting articles, tutorials, and cutting-edge
          research!
        </Text>
      </Box>

      <Grid templateColumns={['100%', 'repeat(2, 1fr)']} gap={4}>
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

export default WorkPage
