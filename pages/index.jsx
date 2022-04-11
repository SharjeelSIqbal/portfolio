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
        List,
        ListItem,
        SimpleGrid,
        Icon,
        FormControl,
        FormLabel,
        FormHelperText,
        FormErrorMessage,
        Stack,
      } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { FormInput, FormTextarea, FormSubmit } from '../components/form'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear, BioDescription } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub  } from 'react-icons/io5'
import { AiFillLinkedin, AiOutlineSend, AiFillFilePdf } from 'react-icons/ai'

import { useReducer, useState } from 'react'
import { ContactMe } from '../components/contact-me'


const Page = () => {

  return (
    <Layout>
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
            to build whatever comes to his mind. He works at Headwire.inc configuring, customizing,
            and authoring CMS components. On most days, you can catch him at a local
            coffee shop coding away. He designs and implements his own ideas and
            loves to work with others who share the same passion as him. When not online
            you can find him balling up, playing music, reading, snowboarding, or attending concerts.
            His latest project is on a recipe application that helps create a recipe book for a specific diet.
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
          <Heading as="h3" variant="section-title">Tech Stack</Heading>
          <p>JavaScript | ES5/ES6 | CSS | SASS | LESS | Bootstrap | MUI | React.js | Next.js | Node.js | Express.js | AEM | CMS | UI/UX | jQuery | socket.io | SQL(PostgreSQL) | NoSQL(MongoDB) | Mongoose | AWS | S3 | Java | Python  </p>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Professional Experience
          </Heading>
          <BioSection>
          <BioYear>2015-2018</BioYear>
          <Heading as="h4" size="xs" >matchaLOVE, Supervisor</Heading>
          <BioDescription>
              Worked directly with the manager to log invoices, take in deliveries, record sales,
              and plan new product releases.
              Trained five new employees to keep up to company standards and learn new recipes.
              Managed workflow by delegating tasks to my colleagues based on their individual strengths.
          </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear> 2019-2020</BioYear>
            <Heading as="h4" size="xs" >Hibachi Steakhouse, Server/Host</Heading>
            <BioDescription>
            Planned and organized seating based on occupation, upcoming reservations, and walk-in guests.
            Cooperated with chefs to deliver quality service to guests.
            Maintained quality and safety standards by following health code procedures for food handlers.
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>2018-2021</BioYear>
            <Heading as="h4" size="xs" >Dream Decor, Coordinator</Heading>
            <BioDescription>
              Coordinated events following a rigid schedule to keep the event moving toward the right direction.
              Communicated with clients to plan dates, pick suitable venues, and choose desire decorations for their events.
              Managed and set-up decorations at venues, as specified by the client, catering to both small (25+) and large (250+) parties.
            </BioDescription>
          </BioSection>
          <BioSection>
            <BioYear>2021-</BioYear>
            <Heading as="h4" size="xs">Headwire.inc, Junior Front End Developer</Heading>
            <BioDescription>
              Produce reusable and customizable components for the Adobe Expreience Manager CMS.
              Address and solve issues presented by QA and UI/UX team following a strict sprint schedule.
              Optomize code by applying best SEO practices to increase acessibility and performance.
            </BioDescription>
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">Education</Heading>
          <BioSection>
            <BioYear>2021</BioYear>
            <Heading as="h4" size="xs">LearningFuze, Certificate of Completion</Heading>
            <BioDescription>
            Dedicated over 800+ hours to gain coding experience (70/hours per week) applying computer science fundamentals in a
            simulated work environment.
            </BioDescription>
          </BioSection>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">I {`\u2665`} </Heading>
          <Paragraph>
            Art, Guitar, Piano, Video Games, Travelling, Hiking, Reading, Basketball, Snowboarding, Festivals, Concerts
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SharjeelSIqbal" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/> }>
                  @SharjeelSiqbal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/sharjeel-iqbal/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={AiFillLinkedin} />}>
                  @Sharjeel-Iqbal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://drive.google.com/file/d/17wIXafYkcn7CEiSSbdRfByggr092-5gC/view?usp=sharing" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={AiFillFilePdf} /> }>
                  @Sharjeel-Iqbal-Resume
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <ContactMe />
      </Container>
    </Layout>
  )
}
export default Page;
