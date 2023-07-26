/* eslint-disable react/no-unescaped-entities */
'use client'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const Work: React.FC = () => {
  return (
    <>
      <Box my={6}>
        <Heading as="h1">Privacy Policy</Heading>
        <Text>Last Updated: 26/07/2023</Text>
        <Text>
          Thank you for visiting https://www.nirmalfernando.dev (the "Website").
          This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your personal information. By accessing or using the
          Website, you consent to the practices described in this policy.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h6" fontWeight="bold" variant="section-heading">
          Information We Collect
        </Heading>
        <Text>
          Automatically Collected Information: We may automatically collect
          certain information about your visit to the Website, including your IP
          address, browser type, referring/exit pages, and operating system.
          This data is collected through cookies, web beacons, or similar
          technologies.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Use of Information
        </Heading>
        <Text mb={4}>
          We may use automatically collected information to analyze trends,
          administer the Website, and gather demographic information for
          aggregate use. This helps us understand user preferences and enhance
          user experience.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Third-Party Disclosure
        </Heading>
        <Text mb={4}>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except for the purpose of
          providing requested services or as required by law.
        </Text>
        <Text mb={4}>
          We may share non-personally identifiable information with third-party
          service providers who assist us in operating the Website, conducting
          our business, or serving you, subject to confidentiality agreements.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Security
        </Heading>
        <Text mb={4}>
          We are committed to maintaining the security of your personal
          information and implement reasonable measures to protect it from
          unauthorized access or disclosure.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Links to Third-Party Websites
        </Heading>
        <Text mb={4}>
          The Website may contain links to third-party websites. We are not
          responsible for the content or privacy practices of these websites. We
          encourage you to review their privacy policies before providing any
          personal information.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Changes to this Privacy Policy
        </Heading>
        <Text mb={4}>
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with a revised date. Please check this page
          regularly for updates.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Contact Us
        </Heading>
        <Text mb={4}>
          If you have any questions or concerns about this Privacy Policy or the
          Website's practices regarding your personal information, please
          contact us by <a href="mailto:w.v.nirmalfernando@gmail.com">email</a>.
        </Text>
      </Box>
    </>
  )
}
export default Work
