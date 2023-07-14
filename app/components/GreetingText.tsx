import { useEffect, useState } from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { CountryList } from '../lib/CountryList'

const GreetingText = () => {
  const [country, setCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    // Fetch the country data from the API
    fetch('/api/client-country')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country)
        setIsLoading(false)
        controls.start({
          y: 0,
          opacity: 1,
          transition: { type: 'spring', damping: 10, stiffness: 100 },
        })
      })
      .catch((error) => {
        console.error('Error fetching country:', error)
        setIsLoading(false) // Set loading state to false in case of an error
      })
  }, [])

  const getGreeting = (countryCode: keyof typeof CountryList) => {
    const countryData = CountryList[countryCode]
    if (countryData) {
      return `${countryData.greeting}`
    } else {
      return 'Hello! Welcome.'
    }
  }

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      style={{ display: isLoading ? 'none' : 'block' }} // Hide the div when loading
    >
      <Text
        ml={{ base: 0, md: '3' }}
        fontSize={{ base: '10px', md: 'sm' }}
        color={useColorModeValue('tiffanyBlue.900', 'hotYellow.500')}
      >
        {getGreeting(country)}
      </Text>
    </motion.div>
  )
}

export default GreetingText
