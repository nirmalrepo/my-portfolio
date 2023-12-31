import { IconButton, HStack } from '@chakra-ui/react'
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import LinkWithHoverSound from './LinkWithHoverSound'

const SocialMediaIcons: React.FC = () => {
  const socialMediaData = [
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/nirmal-fdo/' },
    { icon: FaInstagram, link: 'https://www.instagram.com/stories.of.nirmal/' },
    { icon: FaGithub, link: 'https://github.com/nirmalrepo' },
    { icon: FaEnvelope, link: 'mailto:w.v.nirmalfernando@gmail.com' },
  ]

  return (
    <HStack spacing={2} my={4}>
      {socialMediaData.map((item, index) => (
        <LinkWithHoverSound key={index} href={item.link} isExternal>
          <IconButton
            aria-label={item.icon.name}
            icon={<item.icon />}
            size="sm"
            variant="outline"
          />
        </LinkWithHoverSound>
      ))}
    </HStack>
  )
}

export default SocialMediaIcons
