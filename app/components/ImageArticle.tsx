import NextImage from 'next/image'
import { Box, chakra } from '@chakra-ui/react'

const BlogImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['src', 'alt', 'objectFit', 'layout'].includes(prop),
})

const ImageArticle = (props: any) => {
  const { src, alt, objectFit, layout, mt } = props

  return (
    <Box position="relative" mt={mt} width="100%" height="auto">
      <BlogImage
        src={src}
        alt={alt}
        objectFit={objectFit}
        layout={layout}
        borderRadius="md"
        sx={{ position: 'relative !important' }}
      />
    </Box>
  )
}

export default ImageArticle
