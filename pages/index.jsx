import Section from '../components/section';
import { Container,
        Box,
        Heading,
        Image,
        useColorModeValue
      } from '@chakra-ui/react'
import Paragraph from '../components/paragraph';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a Software Engineer based in Anaheim, California!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sharjeel Iqbal
          </Heading>
          <p>Software Engineer | Musician | Coding Enthusiast  </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{base:4, md: 0}}
          ml={{md:6}}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/sharjeel.jpeg"
            alt="Me"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Sharjeel is a software engineer based in Anaheim, California with a passion
          to build whatever comes to his mind. On most days, you can see him at a local
          coffee shop coding away for hours. He designs and implements his own ideas and
          loves to work with others who share the same passion as him. When not online
          you can find him balling up, playing music, and reading. He is currently working
          on a mobile chat application that helps native and non-native speakers communicate
          seamlessly.
        </Paragraph>
      </Section>
    </Container>

  )
}
export default Page;
