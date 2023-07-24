'use client'
import React from 'react'
import Image from 'next/image'
import { Box, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import LinkWithHoverSound from '../LinkWithHoverSound'
import NextLink from 'next/link'
import ImageArticle from '../ImageArticle'

const portfolioItems = [
  {
    title: 'My Portfolio',
    thumbnail: '/images/work/my-portfolio/my-portfolio-thumbnail.jpg',
    description: 'This is my portfolio showcasing my projects.',
    link: '/work/my-portfolio',
  },
]

const WorkPage: React.FC = () => {
  const linkColor = useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')

  return (
    <Grid
      templateColumns={['100%', 'repeat(2, 1fr)']}
      // justifyContent="center"
      gap={4}
    >
      {portfolioItems.map((item, index) => (
        <Box key={index}>
          <ImageArticle
            src={item.thumbnail}
            alt={item.title}
            objectFit="contain"
            loading="lazy"
            layout="fill"
          />

          <Heading as="h5" fontWeight="bold" variant="section-heading">
            {item.title}
          </Heading>
          <Text mt={2}>{item.description}</Text>
          <LinkWithHoverSound as={NextLink} href={item.link} color={linkColor}>
            Read more
          </LinkWithHoverSound>
        </Box>
      ))}
    </Grid>
  )
}

export default WorkPage
