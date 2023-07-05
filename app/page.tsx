'use client'
import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import PageWrapper from './page-wrapper'
const Home: React.FC = () => {
  return (
    <PageWrapper name="home">
      <Container maxW="container.md">
        <Box display={{ md: 'flex' }} py={5}>
          <Heading as="h2" variant="page-title">
            Your Heading Here
          </Heading>
        </Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
          ultricies auctor quam quis mattis. Proin sodales et lectus nec
          blandit. Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a
          vehicula sapien, non elementum arcu. Proin urna massa, consequat ut
          consectetur sed, cursus sed arcu. Cras ut erat sit amet dolor
          tincidunt pulvinar vel non leo. Morbi imperdiet est leo, convallis
          interdum purus fermentum vitae. In hendrerit vulputate nibh eu tempor.
          Integer mattis ante eu lectus consequat, eget congue mi commodo. Sed
          dictum volutpat egestas. Nam non dignissim lacus. Nullam dolor nulla,
          pretium convallis urna vel, aliquet porttitor ante. Curabitur quam
          metus, tempor eget dui ut, fringilla vulputate leo. Etiam gravida ac
          ligula eu ullamcorper. Fusce id nunc consequat mauris sollicitudin
          mollis sed sit amet odio. Sed venenatis nisl sit amet tortor pretium
          lacinia. Phasellus et ante pharetra, cursus nisi vel, tincidunt lorem.
          Cras dapibus tellus vel facilisis elementum. Proin eu orci in urna
          euismod vehicula. Aenean massa ipsum, finibus at sem ac, egestas porta
          eros. Curabitur vel felis dui. Praesent ac arcu at lacus venenatis
          condimentum in imperdiet felis. Nulla facilisi. Phasellus sit amet
          commodo nisl, a gravida urna. Sed dignissim neque mi, eget elementum
          felis ultricies ut. Aenean in rutrum turpis. Mauris vitae odio a est
          convallis finibus a ac lectus. Nullam tristique, ipsum vitae pulvinar
          hendrerit, nibh eros blandit sapien, a porttitor turpis dui at sapien.
          Nunc felis massa, viverra non fringilla sed, viverra quis turpis. Nunc
          interdum commodo ultrices. Nulla a finibus erat, quis fringilla dolor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
          ultricies auctor quam quis mattis. Proin sodales et lectus nec
          blandit. Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a
          vehicula sapien, non elementum arcu. Proin urna massa, consequat ut
          consectetur sed, cursus sed arcu. Cras ut erat sit amet dolor
          tincidunt pulvinar vel non leo. Morbi imperdiet est leo, convallis
          interdum purus fermentum vitae. In hendrerit vulputate nibh eu tempor.
          Integer mattis ante eu lectus consequat, eget congue mi commodo. Sed
          dictum volutpat egestas. Nam non dignissim lacus. Nullam dolor nulla,
          pretium convallis urna vel, aliquet porttitor ante. Curabitur quam
          metus, tempor eget dui ut, fringilla vulputate leo. Etiam gravida ac
          ligula eu ullamcorper. Fusce id nunc consequat mauris sollicitudin
          mollis sed sit amet odio. Sed venenatis nisl sit amet tortor pretium
          lacinia. Phasellus et ante pharetra, cursus nisi vel, tincidunt lorem.
          Cras dapibus tellus vel facilisis elementum. Proin eu orci in urna
          euismod vehicula. Aenean massa ipsum, finibus at sem ac, egestas porta
          eros. Curabitur vel felis dui. Praesent ac arcu at lacus venenatis
          condimentum in imperdiet felis. Nulla facilisi. Phasellus sit amet
          commodo nisl, a gravida urna. Sed dignissim neque mi, eget elementum
          felis ultricies ut. Aenean in rutrum turpis. Mauris vitae odio a est
          convallis finibus a ac lectus. Nullam tristique, ipsum vitae pulvinar
          hendrerit, nibh eros blandit sapien, a porttitor turpis dui at sapien.
          Nunc felis massa, viverra non fringilla sed, viverra quis turpis. Nunc
          interdum commodo ultrices. Nulla a finibus erat, quis fringilla dolor.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
          ultricies auctor quam quis mattis. Proin sodales et lectus nec
          blandit. Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a
          vehicula sapien, non elementum arcu. Proin urna massa, consequat ut
          consectetur sed, cursus sed arcu. Cras ut erat sit amet dolor
          tincidunt pulvinar vel non leo. Morbi imperdiet est leo, convallis
          interdum purus fermentum vitae. In hendrerit vulputate nibh eu tempor.
          Integer mattis ante eu lectus consequat, eget congue mi commodo. Sed
          dictum volutpat egestas. Nam non dignissim lacus. Nullam dolor nulla,
          pretium convallis urna vel, aliquet porttitor ante. Curabitur quam
          metus, tempor eget dui ut, fringilla vulputate leo. Etiam gravida ac
          ligula eu ullamcorper. Fusce id nunc consequat mauris sollicitudin
          mollis sed sit amet odio. Sed venenatis nisl sit amet tortor pretium
          lacinia. Phasellus et ante pharetra, cursus nisi vel, tincidunt lorem.
          Cras dapibus tellus vel facilisis elementum. Proin eu orci in urna
          euismod vehicula. Aenean massa ipsum, finibus at sem ac, egestas porta
          eros. Curabitur vel felis dui. Praesent ac arcu at lacus venenatis
          condimentum in imperdiet felis. Nulla facilisi. Phasellus sit amet
          commodo nisl, a gravida urna. Sed dignissim neque mi, eget elementum
          felis ultricies ut. Aenean in rutrum turpis. Mauris vitae odio a est
          convallis finibus a ac lectus. Nullam tristique, ipsum vitae pulvinar
          hendrerit, nibh eros blandit sapien, a porttitor turpis dui at sapien.
          Nunc felis massa, viverra non fringilla sed, viverra quis turpis. Nunc
          interdum commodo ultrices. Nulla a finibus erat, quis fringilla dolor.
        </Text>
      </Container>
    </PageWrapper>
  )
}
export default Home
