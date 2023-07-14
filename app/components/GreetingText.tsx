import { Text, useColorModeValue } from '@chakra-ui/react'
import { NextRequest, NextResponse } from 'next/server'

const GreetingText = () => {
  return (
    <Text
      ml={2}
      fontSize="sm"
      color={useColorModeValue('tiffanyBlue.900', 'hotYellow.500')}
    >
      Kia ora! Welcome.
    </Text>
  )
}

export default GreetingText