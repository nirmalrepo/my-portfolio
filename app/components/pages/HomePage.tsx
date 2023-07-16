"use client";
import NextImage from "next/image";
import {
  Box,
  Heading,
  Text,
  chakra,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import Timeline from "../Timeline";
import SocialMediaIcons from "../SocialMediaIcons";

const ProfileImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const HomePage: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box py={5} gap={6} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Box
            borderColor={"whiteAlpha.800"}
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/nirmal-profile.jpg"
              alt="Profile Image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nirmal Fernando{" "}
            <Text as="span" fontSize="xl" fontFamily={theme.fonts.sinhala}>
              (නිර්මාල් ප්‍රනාන්දු)
            </Text>
          </Heading>
          <Text>
            Fullstack Developer ( Developer | Creative Coder | Home Chef )
          </Text>
          <SocialMediaIcons />
        </Box>
      </Box>
      <Box
        p={6}
        mb={8}
        borderRadius="md"
        backgroundColor={useColorModeValue("whiteAlpha.700", "whiteAlpha.200")}
      >
        <Heading as="h6" fontWeight="bold" variant="section-heading">
          Intro
        </Heading>
        <Text>
          Nirmal is a full-stack web developer based in Nelson NZ, with a
          passion for creative coding and front-end development. Currently, he
          is working as a Senior Web Developer, utilizing his expertise to
          create exceptional digital experiences. Outside of his work life, he
          finds joy in capturing the breathtaking landscapes of New Zealand
          through his iPhone lens, skillfully editing them to enhance their
          beauty. Additionally, Nirmal has a deep love for cooking and enjoys
          experimenting with flavors and dishes. Join Nirmal on his journey as
          he combines his technical skills, artistic vision, and culinary
          passions to make a mark in the world of web development.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h6" fontWeight="bold" variant="section-heading">
          Timeline
        </Heading>
        <Timeline />
      </Box>
    </>
  );
};
export default HomePage;
