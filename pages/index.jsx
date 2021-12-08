import Section from '../components/section'
import  NextLink  from 'next/link'

import { Container,
        Button,
        Box,
        Heading,
        Image,
        Link,
        useColorModeValue,
        UnorderedList,
        ListItem
      } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
          seamlessly. You can checkout his most recent application {' '}
          <NextLink href="/works/pitchur-perfect">
            <Link>Pitchur Perfect</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4} >
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Kirachi, Pakistan.
        </BioSection>
        <BioSection>
        <BioYear>2015-2018</BioYear>
        <Heading as="h4" size="xs" >matchaLOVE, Supervisor</Heading>
            Worked directly with the manager to log invoices, take in deliveries, record sales,
            and plan new product releases.
            Trained five new employees to keep up to company standards and learn new recipes.
            Managed workflow by delegating tasks to my colleagues based on their individual strengths.
        </BioSection>
        <BioSection>
          <BioYear> 2019 </BioYear>
          <Heading as="h4" size="xs" >Hibachi Steakhouse, Server/Host</Heading>
          Planned and organized seating based on occupation, upcoming reservations, and walk-in guests.
          Cooperated with chefs to deliver quality service to guests.
          Maintained quality and safety standards by following health code procedures for food handlers.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          <Heading as="h4" size="xs" >Dream Decor, Coordinator</Heading>
          Coordinated events following a rigid schedule to keep the event moving toward the right direction.
          Communicated with clients to plan dates, pick suitable venues, and choose desire decorations for their events.
          Managed and set-up decorations at venues, as specified by the client, catering to both small (25+) and large (250+) parties.
        </BioSection>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">I {`\u2665`} </Heading>
        <Paragraph>
          Music, Art, Playing Guitar and Piano, Video Games, Travelling, Hiking, Reading, Basketball
        </Paragraph>
      </Section>
    </Container>

  )
}
export default Page;
