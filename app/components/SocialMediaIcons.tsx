import { IconButton, Link, HStack } from '@chakra-ui/react'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialMediaIcons = () => {
  const socialMediaData = [
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/your-profile' },
    { icon: FaInstagram, link: 'https://www.instagram.com/your-profile' },
    { icon: FaGithub, link: 'https://www.github.com/your-profile' },
    { icon: FaEnvelope, link: 'mailto:youremail@example.com' },
  ]

  return (
    <HStack spacing={2} my={4}>
      {socialMediaData.map((item, index) => (
        <Link key={index} href={item.link} isExternal>
          <IconButton
            aria-label={item.icon.name}
            icon={<item.icon />}
            size="md"
            variant="outline"
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaIcons
