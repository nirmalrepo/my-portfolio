import NextImage from 'next/image'
import { Box, chakra } from '@chakra-ui/react'
import Image from 'next/image'

interface ImageArticleProps {
  src: string
  alt: string
}

const BlogImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['src', 'alt', 'loading', 'fill'].includes(prop),
})

const ImageArticle: React.FC<ImageArticleProps> = (props) => {
  const { src, alt } = props

  return (
    <Box position="relative" width="100%" height="auto">
      <BlogImage
        src={src}
        alt={alt}
        loading="lazy"
        fill="true"
        borderRadius="md"
        my={4}
        sx={{ position: 'relative !important', objectFit: 'contain' }}
      />
    </Box>
  )
}

export default ImageArticle
