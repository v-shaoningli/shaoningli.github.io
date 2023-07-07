import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  // useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' // EmailIcon
// import Paragraph from '../components/paragraph'
import { BioSection, BioYear, PubSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5' // IoLogoTwitter, IoLogoInstagram
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m a PhD student in Mila!
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} letterSpacing='wide' mt='1'>
          <Heading as='h2' size='2xl' variant="page-title">
            Shaoning Li
          </Heading>
          
            <Box mt="3.5">
            I would start my first-year PhD student at {' '}
            <Link
              as={NextLink}
              href="https://mila.quebec/"
              passHref
              target="_blank"
            >
              Montreal Institute for Learning Algorithms (Mila)
            </Link>
            {' '} supervised by Prof. {' '}
            <Link
              as={NextLink}
              href="https://jian-tang.com/"
              passHref
              target="_blank"
            >
              Jian Tang
            </Link>
            . Before that, I received my B.S.  
            from {' '}
            <Link
              as={NextLink}
              href="https://ev.buaa.edu.cn/"
              passHref
              target="_blank"
            >
              Beihang University
            </Link>
            , advised by Prof. {' '}
            <Link
              as={NextLink}
              href="https://penghao-bdsc.github.io/"
              passHref
              target="_blank"
            >
              Hao Peng
            </Link>
            . Concurrently, I was a research intern at {' '}
            <Link
              as={NextLink}
              href="https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/"
              passHref
              target="_blank"
            >
              Microsoft Research AI4Science
            </Link>
            {' '} supervised by Dr. {' '}
            <Link
              as={NextLink}
              href="https://www.microsoft.com/en-us/research/people/watong/"
              passHref
              target="_blank"
            >
              Tong Wang
            </Link>
            .
            </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 4 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="180px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/lisn.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="180"
              height="210"
            />
          </Box>
        </Box>
      </Box>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019.8 - 2023.6</BioYear>
          Cyber Science and Technology, Beihang University
        </BioSection>
        <BioSection>
          <BioYear>2022.2 - 2023.6</BioYear>
          Research Intern, Microsoft Research AI4Science
        </BioSection>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
          <PubSection>
          <Link
              as={NextLink}
              href="https://arxiv.org/abs/2210.16518"
              passHref
              target="_blank"
            >
              ViSNet: a scalable and accurate geometric deep learning potential for molecular dynamics simulation.
            </Link>
          </PubSection>
          Yusong Wang*, <b>Shaoning Li*</b>, Xinheng He, Mingyu Li, Zun Wang, Nanning Zheng, Bin Shao, Tong Wang, Tie-Yan Liu
          <PubSection>
          <Link
              as={NextLink}
              href="https://ieeexplore.ieee.org/abstract/document/9693189/"
              passHref
              target="_blank"
            >
              Reinforced, Incremental and Cross-lingual Event Detection 
              From Social Messages.
            </Link>
          </PubSection>
          Hao Peng, Ruitong Zhang, <b>Shaoning Li</b>, Yuwei Cao, Shirui Pan, Philip Yu.
          <br />
          IEEE Transactions on Pattern Analysis and Machine Intelligence <b>(TPAMI 2022)</b>.
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Full Publications
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Competitions
        </Heading>
        <PubSection>
          Winners of {' '}
          <Link
              as={NextLink}
              href="https://arxiv.org/abs/2210.16518"
              passHref
              target="_blank"
            >
              OGB-LSC@NeurIPS2022
            </Link>
            {' '} PCQM4Mv2 Graph Regression Track.
        </PubSection>
        <PubSection>
          Winners of {' '}
          <Link
              as={NextLink}
              href="https://opencatalystproject.org/challenge.html"
              passHref
              target="_blank"
            >
              Open Catalyst Project@NeurIPS2022
            </Link>
            {' '} Initial Structure to Relaxed Energy (IS2RE) Task.
        </PubSection>
        </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/v-shaoningli" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @v-shaoningli
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://scholar.google.com/citations?user=aOdgeXEAAAAJ&hl=zh-CN" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                Google Scholar
              </Button>
            </Link>
          </ListItem>
        </List>

        

        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
