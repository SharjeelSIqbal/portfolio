import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ShadowDeck = () => (
  <Layout title="Shadow Deck">
    <Container>
      <Title>
        Shadow Deck <Badge>2021</Badge>
      </Title>
      <Paragraph>
        A web application for Yu-Gi-Oh! card players to build their own decks.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sharjeelsiqbal.github.io/shadow-deck/">
            Shadow Deck <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/SharjeelSIqbal/shadow-deck">
            https://github.com/SharjeelSIqbal/shadow-deck <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, Linux, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript ES5/ES6, CSS, HTML</span>
        </ListItem>
      </List>
      <WorkImage src='/images/works/shadow-deck/shadow-deck.png' alt="Shadow Deck home page" />
      <WorkImage src='/images/works/shadow-deck/my-deck.png' alt="Shadow Deck view my deck" />
      <WorkImage src='/images/works/shadow-deck/search.png' alt="Shadow Deck search for a card" />
      <WorkImage src='/images/works/shadow-deck/add-card.png' alt="Shadow Deck add a card" /> */}
      <WorkImage src='/images/works/shadow-deck/delete-card.png' alt="Shadow Deck delete a card" /> */}
    </Container>
  </Layout>
)

export default ShadowDeck
