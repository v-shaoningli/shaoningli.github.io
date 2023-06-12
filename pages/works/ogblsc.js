import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="OGB_LSC">
      <Container>
        <Title>
          OGB Large Scale Challenge <Badge>@ NeurIPS 2022</Badge>
        </Title>
        <P>
          <b>ViSNet Team</b> is one of the Winners at OGB-LSC PCQM4Mv2 competition, which includes a quantum chemistry dataset with 300M molecules, and its task is to predict an important molecular property, the HOMO-LUMO gap, of a given molecule (graph regression).
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ogb.stanford.edu/neurips2022/">
            https://ogb.stanford.edu/neurips2022/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/microsoft/ViSNet">
            https://github.com/microsoft/ViSNet <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tech Report</Meta>
            <Link href="https://arxiv.org/abs/2211.12791">
            https://arxiv.org/abs/2211.12791 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/ogb_member.jpg" alt="ogblsc" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/hUjwvioQbyc"
            // src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  