import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import pitchurPerfectThumbnail from '../public/images/pitchur-perfect.png'
import cardDeck from '../public/images/shadow-deck.png'
const Works = () => {
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="pitchur-perfect" title="Pitchur Perfect" thumbnail={pitchurPerfectThumbnail}>
            A vocal warm-up application
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="shadow-deck" title="Yu-Gi-Oh! Deck Builder" thumbnail={cardDeck}>
            A Yu-Gi-Oh! deck builder application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}
export default Works
