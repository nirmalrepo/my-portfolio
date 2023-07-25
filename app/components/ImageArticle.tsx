import NextImage from 'next/image'
import { Box, chakra } from '@chakra-ui/react'
import Image from 'next/image'

interface ImageArticleProps {
  src: string
  alt: string
}

const BlogImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['src', 'alt', 'objectFit', 'layout', 'loading'].includes(prop),
})

const ImageArticle: React.FC<ImageArticleProps> = (props) => {
  const { src, alt } = props

  return (
    <Box position="relative" mt={4} width="100%" height="auto">
      <BlogImage
        src={src}
        alt={alt}
        objectFit="contain"
        loading="lazy"
        layout="fill"
        borderRadius="md"
        my={4}
        sx={{ position: 'relative !important' }}
      />
    </Box>
  )
}

export default ImageArticle
