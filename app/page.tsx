"use client";
import NextImage from "next/image";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Container,
  Heading,
  Text,
  chakra,
  theme,
  useTheme,
} from "@chakra-ui/react";

const ProfileImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box display={{ md: "flex" }} py={5} gap={8}>
        <Box flexShrink={0}>
          <Box
            borderColor={"whiteAlpha.800"}
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
            Nirmal Fernando{" "}
            <Text as="span" fontSize="2xl" fontFamily={theme.fonts.sinhala}>
              (නිර්මාල් ප්‍රනාන්දු)
            </Text>
          </Heading>
          <Text>
            Fullstack Web Develpoer ( Developer | Creative Coder | Home Chef )
          </Text>
        </Box>
      </Box>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
        ultricies auctor quam quis mattis. Proin sodales et lectus nec blandit.
        Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a vehicula
        sapien, non elementum arcu. Proin urna massa, consequat ut consectetur
        sed, cursus sed arcu. Cras ut erat sit amet dolor tincidunt pulvinar vel
        non leo. Morbi imperdiet est leo, convallis interdum purus fermentum
        vitae. In hendrerit vulputate nibh eu tempor. Integer mattis ante eu
        lectus consequat, eget congue mi commodo. Sed dictum volutpat egestas.
        Nam non dignissim lacus. Nullam dolor nulla, pretium convallis urna vel,
        aliquet porttitor ante. Curabitur quam metus, tempor eget dui ut,
        fringilla vulputate leo. Etiam gravida ac ligula eu ullamcorper. Fusce
        id nunc consequat mauris sollicitudin mollis sed sit amet odio. Sed
        venenatis nisl sit amet tortor pretium lacinia. Phasellus et ante
        pharetra, cursus nisi vel, tincidunt lorem. Cras dapibus tellus vel
        facilisis elementum. Proin eu orci in urna euismod vehicula. Aenean
        massa ipsum, finibus at sem ac, egestas porta eros. Curabitur vel felis
        dui. Praesent ac arcu at lacus venenatis condimentum in imperdiet felis.
        Nulla facilisi. Phasellus sit amet commodo nisl, a gravida urna. Sed
        dignissim neque mi, eget elementum felis ultricies ut. Aenean in rutrum
        turpis. Mauris vitae odio a est convallis finibus a ac lectus. Nullam
        tristique, ipsum vitae pulvinar hendrerit, nibh eros blandit sapien, a
        porttitor turpis dui at sapien. Nunc felis massa, viverra non fringilla
        sed, viverra quis turpis. Nunc interdum commodo ultrices. Nulla a
        finibus erat, quis fringilla dolor.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
        ultricies auctor quam quis mattis. Proin sodales et lectus nec blandit.
        Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a vehicula
        sapien, non elementum arcu. Proin urna massa, consequat ut consectetur
        sed, cursus sed arcu. Cras ut erat sit amet dolor tincidunt pulvinar vel
        non leo. Morbi imperdiet est leo, convallis interdum purus fermentum
        vitae. In hendrerit vulputate nibh eu tempor. Integer mattis ante eu
        lectus consequat, eget congue mi commodo. Sed dictum volutpat egestas.
        Nam non dignissim lacus. Nullam dolor nulla, pretium convallis urna vel,
        aliquet porttitor ante. Curabitur quam metus, tempor eget dui ut,
        fringilla vulputate leo. Etiam gravida ac ligula eu ullamcorper. Fusce
        id nunc consequat mauris sollicitudin mollis sed sit amet odio. Sed
        venenatis nisl sit amet tortor pretium lacinia. Phasellus et ante
        pharetra, cursus nisi vel, tincidunt lorem. Cras dapibus tellus vel
        facilisis elementum. Proin eu orci in urna euismod vehicula. Aenean
        massa ipsum, finibus at sem ac, egestas porta eros. Curabitur vel felis
        dui. Praesent ac arcu at lacus venenatis condimentum in imperdiet felis.
        Nulla facilisi. Phasellus sit amet commodo nisl, a gravida urna. Sed
        dignissim neque mi, eget elementum felis ultricies ut. Aenean in rutrum
        turpis. Mauris vitae odio a est convallis finibus a ac lectus. Nullam
        tristique, ipsum vitae pulvinar hendrerit, nibh eros blandit sapien, a
        porttitor turpis dui at sapien. Nunc felis massa, viverra non fringilla
        sed, viverra quis turpis. Nunc interdum commodo ultrices. Nulla a
        finibus erat, quis fringilla dolor.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        feugiat velit, sit amet malesuada risus. Fusce id elit ipsum. Nunc
        ultricies auctor quam quis mattis. Proin sodales et lectus nec blandit.
        Sed aliquet elit nulla, id ullamcorper augue semper in. Sed a vehicula
        sapien, non elementum arcu. Proin urna massa, consequat ut consectetur
        sed, cursus sed arcu. Cras ut erat sit amet dolor tincidunt pulvinar vel
        non leo. Morbi imperdiet est leo, convallis interdum purus fermentum
        vitae. In hendrerit vulputate nibh eu tempor. Integer mattis ante eu
        lectus consequat, eget congue mi commodo. Sed dictum volutpat egestas.
        Nam non dignissim lacus. Nullam dolor nulla, pretium convallis urna vel,
        aliquet porttitor ante. Curabitur quam metus, tempor eget dui ut,
        fringilla vulputate leo. Etiam gravida ac ligula eu ullamcorper. Fusce
        id nunc consequat mauris sollicitudin mollis sed sit amet odio. Sed
        venenatis nisl sit amet tortor pretium lacinia. Phasellus et ante
        pharetra, cursus nisi vel, tincidunt lorem. Cras dapibus tellus vel
        facilisis elementum. Proin eu orci in urna euismod vehicula. Aenean
        massa ipsum, finibus at sem ac, egestas porta eros. Curabitur vel felis
        dui. Praesent ac arcu at lacus venenatis condimentum in imperdiet felis.
        Nulla facilisi. Phasellus sit amet commodo nisl, a gravida urna. Sed
        dignissim neque mi, eget elementum felis ultricies ut. Aenean in rutrum
        turpis. Mauris vitae odio a est convallis finibus a ac lectus. Nullam
        tristique, ipsum vitae pulvinar hendrerit, nibh eros blandit sapien, a
        porttitor turpis dui at sapien. Nunc felis massa, viverra non fringilla
        sed, viverra quis turpis. Nunc interdum commodo ultrices. Nulla a
        finibus erat, quis fringilla dolor.
      </Text>
    </>
  );
};
export default Home;
