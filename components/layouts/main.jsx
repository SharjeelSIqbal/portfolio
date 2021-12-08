import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/layout'
import Fonts from '../fonts'

const Main = ({children, router}) => {
   return(
     <Box as="main" pb={8}>
       <Fonts />
       <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title style={{fontFamily: 'sans-serif'}}>Sharjeel Iqbal</title>
       </Head>
       <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
      {children}
      </Container>
     </Box>
   )
}

export default Main;
