import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const PitchurPerfect = () => {
   return (
     <Layout title ="Pitchur Perfect">
       <Container>
         <Title>
           Pitchur Perfect <Badge>2021</Badge>
         </Title>
         <Paragraph>
           A web applications for singers who want to improve their vocal range.
         </Paragraph>
         <List ml={4} my={4}>
           <ListItem>
             <Meta>Website</Meta>
             <Link href="https://pitchur-perfect.herokuapp.com/">
               hhttps://pitchur-perfect.herokuapp.com/ <ExternalLinkIcon mx="2px" />
             </Link>
           </ListItem>
           <ListItem>
             <Meta>Source</Meta>
             <Link href="https://github.com/SharjeelSIqbal/pitchur-perfect">
               https://github.com/SharjeelSIqbal/pitchur-perfect <ExternalLinkIcon mx="2px" />
             </Link>
           </ListItem>
           <ListItem>
             <Meta>Platform</Meta>
             <span>Windows, macOS, Linux, Android</span>
           </ListItem>
           <ListItem>
             <Meta>Stack</Meta>
             <span>Node.js, Express, SQL, PostgreSQL Webpack HTML5, CSS, Heroku AWS S3, Web Audio API JavaScript ES6 React.js</span>
           </ListItem>
         </List>
         <WorkImage src='/images/works/pitchur-perfect/pitchur-perfect.png' alt="Pitchur Perfect Home Page" />
         <WorkImage src='/images/works/pitchur-perfect/recordings.png' alt="Pitchur Perfect view recordings" />
         <WorkImage src='/images/works/pitchur-perfect/pitch.png' alt="Pitchur Perfect match pitch" />
       </Container>
     </Layout>
   )
}

export default PitchurPerfect
