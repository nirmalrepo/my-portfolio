'use client'
import React from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import WorkGrid from '../WorkGrid'

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
      <Box
        px={6}
        pt={6}
        pb={8}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <WorkGrid />
      </Box>
    </>
  )
}

export default WorkPage
