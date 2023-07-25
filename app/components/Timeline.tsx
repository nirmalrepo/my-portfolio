import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import theme from '../lib/theme'
interface TimelineItemProps {
  year: string
  description: string
  imageName: string
  isLast?: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  description,
  imageName,
  isLast,
}) => (
  <Flex align="start" position="relative">
    <Box mt={1}>
      <Box w="30px" h="30px">
        <Image
          src={`/images/icons/${imageName}.png`}
          alt="Profile Image"
          width="40"
          height="40"
        />
      </Box>
    </Box>
    <VStack align="start" ml={3} spacing={0}>
      <Text fontWeight="bold" fontFamily={theme.fonts.heading}>
        {year}
      </Text>
      <Text fontSize="sm">{description}</Text>
    </VStack>
    {!isLast && (
      <Box
        position="absolute"
        top="40px"
        left="15px"
        w="2px"
        h="50%"
        bg="#2f2e2e"
      />
    )}
  </Flex>
)

const Timeline: React.FC = () => (
  <VStack spacing={4} align="start">
    <TimelineItem
      year="1989"
      description="Born in Kurunegala (කුරුණෑගල), Sri Lanka"
      imageName="srilanka"
    />
    <TimelineItem
      year="2019"
      description="Completed G.C.E A/L at St.Annes College"
      imageName="degree"
    />
    <TimelineItem
      year="2010"
      description="Moving to Chennai (சென்னை), India"
      imageName="india"
    />
    <TimelineItem
      year="2014"
      description="Graduated as B.Tech in Computer Scince & Engineering with First Class Distinction from Bharath University, Chennai (சென்னை), India"
      imageName="degree"
    />
    <TimelineItem
      year="2015"
      description="Software Engineer | Worked at Management Development Co-operative Co. Ltd Kurunegala (කුරුණෑගල), Sri Lanka"
      imageName="dev"
    />
    <TimelineItem
      year="2016"
      description="Software Engineer | Worked at Seebo Networks Colombo (කොළඹ), Sri Lanka"
      imageName="dev"
    />
    <TimelineItem
      year="2018"
      description="Team Lead | Worked at Wollstra Tech Colombo (කොළඹ), Sri Lanka"
      imageName="dev"
    />
    <TimelineItem
      year="2018"
      description="Migrated to Aotearoa"
      imageName="nz"
    />
    <TimelineItem
      year="2018"
      description="Completed Graduate Diploma in Inofrmation Technology at NMIT, Nelson"
      imageName="degree"
    />
    <TimelineItem
      year="2018 to present"
      description="Web Developer | Currently working at Downing Design, Nelson"
      imageName="dev"
      isLast
    />
  </VStack>
)

export default Timeline
