/* eslint-disable react/no-unescaped-entities */
'use client'
import { Box, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import LinkWithHoverSound from '@/app/components/LinkWithHoverSound'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ImageArticle from '@/app/components/ImageArticle'

const Work: React.FC = () => {
  return (
    <>
      <Box py={5} gap={6}>
        <LinkWithHoverSound
          as={NextLink}
          href="/work"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Work <Icon as={ChevronRightIcon} />
        </LinkWithHoverSound>
        <Heading as="h2" variant="page-title">
          My Portfolio
        </Heading>
      </Box>
      <Box mb={8} borderRadius="md">
        <ImageArticle
          src="/images/work/my-portfolio/my-portfolio-thumbnail.jpg"
          alt="My Portfolio Thumbnail"
        />
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h6" fontWeight="bold" variant="section-heading">
          Introduction
        </Heading>
        <Text>
          In this article I will take you on a journey through the creation of
          my portfolio website. This project allowed me to explore some exciting
          technologies and tools, such as Next.js, Chakra UI, Framer Motion,
          Voxel Generator, Blender and Three.js. In this article, I'll walk you
          through the key aspects of my website, the challenges I faced, and the
          lessons I learned along the way. I utilize the following tools and
          libraries in the project:
        </Text>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Next.js: A Powerful React Framework</Text>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Chakra UI: A Design System for React</Text>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Framer Motion: Bringing Motion to Life</Text>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Voxel Generator and Blender: Unique 3D Elements</Text>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Three.js: Interactive 3D Graphics</Text>
        </Box>
        <Box display="flex" mt={1} alignItems="center">
          <Icon as={ChevronRightIcon} />
          <Text>Taking It Live with Vercel</Text>
        </Box>
        <Text
          mt={4}
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Tags: NextJs, React, Chakra UI, Framer Motion, Magica Voxel, Blender,
          ThreeJs, React Three Fiber
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Next.js: A Powerful React Framework
        </Heading>
        <Text mb={4}>
          The foundation of my portfolio website is built on Next.js 13, a
          powerful and popular React framework. I chose Next.js for several
          reasons, including its server-side rendering capabilities, automatic
          code splitting, and built-in support for TypeScript. These features
          greatly improved the performance and maintainability of my website.
          This is the first project I am building using Next 13 which has a
          different approach to the routing.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://nextjs.org/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
          mb={4}
        >
          Visit NextJs
        </LinkWithHoverSound>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Chakra UI: A Design System for React
        </Heading>
        <Text mb={4}>
          To create a visually appealing and responsive website, I integrated
          Chakra UI into my project. Chakra UI is a component library that
          provides a set of customizable and accessible React components.
          Leveraging Chakra UI's pre-built components significantly sped up my
          development process and ensured a consistent design throughout the
          website.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://chakra-ui.com/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Visit Chakra UI
        </LinkWithHoverSound>
        <ImageArticle
          src="/images/work/my-portfolio/chakra-ui.jpg"
          alt="Chakra UI"
        />
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Framer Motion: Bringing Motion to Life
        </Heading>
        <Text mb={4}>
          Adding motion and animations to a website can elevate the user
          experience and create a more engaging interface. Framer Motion, a
          popular animation library for React, allowed me to effortlessly
          incorporate stunning animations into my portfolio.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://www.framer.com/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Visit Framer Motion
        </LinkWithHoverSound>
        <ImageArticle
          src="/images/work/my-portfolio/framer-motion.jpg"
          alt="Framer Motion"
        />
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Voxel Generator and Blender: Unique 3D Elements
        </Heading>
        <Text mb={4}>
          To make my portfolio stand out, I wanted to include some unique 3D
          elements. I achieved this by creating voxel art using a voxel
          generator and Blender. Voxel art, with its blocky and pixelated style,
          added an interesting touch to my website's design. I came across an
          open source light weight voxel art editor called Magica Voxel to
          create my voxel character. Blender is used to baked the voxel
          character and export as a gltf object.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://ephtracy.github.io/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Download Magica Voxel
        </LinkWithHoverSound>
        {' || '}
        <LinkWithHoverSound
          isExternal
          href="https://www.blender.org/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Download Blender
        </LinkWithHoverSound>
        <ImageArticle
          src="/images/work/my-portfolio/magica-voxel-ui.jpg"
          alt="Magica Voxel"
        />
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Three.js: Interactive 3D Graphics
        </Heading>
        <Text mb={4}>
          For the cherry on top, I integrated Three.js, a JavaScript library, to
          create interactive 3D graphics and animations. Three.js allowed me to
          showcase my creativity and technical skills by developing captivating
          3D scenes.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://threejs.org/examples/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          View Three.js Examples
        </LinkWithHoverSound>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Deployment: Taking It Live with Vercel
        </Heading>
        <Text mb={4}>
          After completing the development of my portfolio website, the next
          step was to deploy it and make it accessible to the world. Vercel, a
          popular hosting platform, provided an easy and efficient way to deploy
          my Next.js project.
        </Text>
        <LinkWithHoverSound
          isExternal
          href="https://vercel.com/"
          color={useColorModeValue('caribbeanCurrent.500', 'hotOrange.100')}
        >
          Visit Vercel
        </LinkWithHoverSound>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          Challenges Faced
        </Heading>
        <Text mb={4}>
          Throughout the development of my portfolio website using Next.js 13,
          Chakra UI, Framer Motion, Voxel Generator and Blender, and Three.js, I
          encountered several challenges that pushed me to learn and grow as a
          developer. Let's dive into the obstacles I faced and how I overcame
          them:
        </Text>
        <Heading as="h6" fontWeight="bold" variant="section-sub-heading">
          Migrating to Next.js 13 with TypeScript and limited community support
        </Heading>
        <Text mb={4}>
          Upgrading my portfolio website to Next.js 13 with TypeScript was a
          significant challenge. The newer version offered numerous benefits,
          but the lack of extensive community resources made the transition more
          daunting. Overcoming this obstacle required meticulous attention to
          TypeScript configurations and exploring official documentation to
          ensure a smooth migration.
        </Text>
        <Heading as="h6" fontWeight="bold" variant="section-sub-heading">
          Framer Motion's partial compatibility with Next.js 13
        </Heading>
        <Text mb={4}>
          Framer Motion, an animation library, added flair to my portfolio
          website. However, integrating it into Next.js 13 came with certain
          limitations, particularly when attempting to implement animations
          during component exit transitions. Resolving this challenge demanded
          exploring the Framer Motion source code and employing alternative
          animation techniques to achieve the desired effects.
        </Text>
        <Heading as="h6" fontWeight="bold" variant="section-sub-heading">
          Inexperience with Blender for voxel model creation
        </Heading>
        <Text mb={4}>
          Creating voxel art for my website was an exciting idea, but I lacked
          experience with 3D modeling in Blender. Tasks like generating shadows,
          creating textures with alpha layers, and exporting models in a
          web-friendly format posed significant hurdles. The learning curve was
          steep, but the satisfaction of bringing voxel models to life on my
          website made the effort worthwhile.
        </Text>
        <Heading as="h6" fontWeight="bold" variant="section-sub-heading">
          Transitioning from vanilla Three.js to React Three Fiber
        </Heading>
        <Text mb={4}>
          While I had prior experience with Three.js using vanilla JavaScript,
          integrating Three.js into a React environment using React Three Fiber
          presented a unique challenge. Adapting my existing Three.js code to
          work with React components and hooks required understanding React
          Three Fiber's lifecycle and managing interactions between React and
          Three.js. This transition ultimately proved rewarding, offering a
          structured and declarative approach to 3D animation.
        </Text>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
      >
        <Heading as="h5" fontWeight="bold" variant="section-heading">
          That's It. We Made It :)
        </Heading>
        <Text mb={4}>
          In conclusion, building my portfolio website with Next.js 13, Chakra
          UI, Framer Motion, Voxel Generator and Blender, and Three.js was a
          challenging yet rewarding journey. Overcoming obstacles such as
          migrating to Next.js 13 with TypeScript, dealing with partial
          compatibility of Framer Motion, venturing into Blender for voxel
          modeling, and transitioning to React Three Fiber further fueled my
          passion for web development.I was inspired by Osaka based indi
          developer{' '}
          <a href="https://www.craftz.dog/" target="_blank">
            Takuya Matsuyama's
          </a>{' '}
          work and his approch to his work. I have plans to enhance it further
          with a headless CMS in the future to make the website more dynamic and
          content management seamless. As I look forward to sharing my
          knowledge, I am excited to create tutorial articles for each tool
          used, hoping to inspire and empower fellow developers to embrace
          challenges and unleash their creativity in their own projects.
          Together, let's continue pushing the boundaries of what's possible in
          the world of web development.
        </Text>
      </Box>
    </>
  )
}
export default Work
