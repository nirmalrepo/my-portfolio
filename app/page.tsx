'use client'
import NextImage from 'next/image'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Container,
  Heading,
  Text,
  chakra,
  theme,
  useTheme,
} from '@chakra-ui/react'

const ProfileImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Home: React.FC = () => {
  const theme = useTheme()
  return (
    <>
      <Box display={{ md: 'flex' }} py={5} gap={6}>
        <Box flexShrink={0}>
          <Box
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle="solid"
            w="120px"
            h="120px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/nirmal-profile.jpg"
              alt="Profile Image"
              borderRadius="full"
              width="120"
              height="120"
            />
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nirmal Fernando{' '}
            <Text as="span" fontSize="xl" fontFamily={theme.fonts.sinhala}>
              (නිර්මාල් ප්‍රනාන්දු)
            </Text>
          </Heading>
          <Text>
            Fullstack Developer ( Developer | Creative Coder | Home Chef )
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading as="h6" fontWeight="regular">
          Intro
        </Heading>
        <Text>
          Nirmal is a full-stack web developer based in Nelson NZ, with a
          passion for creative coding and front-end development. Outside of his
          work life, he finds joy in capturing the breathtaking landscapes of
          New Zealand through his iPhone lens, skillfully editing them to
          enhance their beauty. Additionally, Nirmal has a deep love for cooking
          and enjoys experimenting with flavors and dishes. Currently, he is
          working as a Senior Web Developer, utilizing his expertise to create
          exceptional digital experiences. Join Nirmal on his journey as he
          combines his technical skills, artistic vision, and culinary passions
          to make a mark in the world of web development.
        </Text>
      </Box>
    </>
  )
}
export default Home
