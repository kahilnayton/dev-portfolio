import styled from 'styled-components'

import Layout from '../components/Layout'
import { colors } from '../styles/colors'
import {
  acrossScreen,
  bottomToTop,
  bottomToTopSlow,
} from '../styles/animations'
import About from '../components/About'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import FeaturedBlogs from '../components/sections/FeaturedBlogs'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ParallaxComponent from '../components/ParallaxComponent'
import { Plane, Balloon } from '../components/_ui/icons'
import Head from 'next/head'
import { PageContent } from '../lib/constants'

// import Image from 'next/image';

import { getAllHomepage } from '../lib/api'
import Bio from '../components/Bio'
import SEO from '../components/SEO'
// import Reveal from 'react-reveal/Reveal';

type HomeProps = {
  allHomepage: any
}

const IndexPage = ({allHomepage}: HomeProps) => {
  const home = allHomepage?.allHomes?.edges[0].node
  const Seo = home?.body[1].primary || SEO

  return (
    <Layout>
      <Head>
        {/* General */}
        <title>{Seo?.site_name}</title>
        <meta name="description" content={Seo.description} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'kahilnayton'} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={Seo.url} key="ogurl" />
        <meta
          property="og:image"
          content={Seo?.preview_image?.url}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={Seo.site_name}
          key="ogsitename"
        />
        <meta property="og:title" content={Seo.title} key="ogtitle" />
        <meta
          property="og:description"
          content={Seo.description}
          key="ogdesc"
        />
      </Head>
      <Wrapper>
        <Hero
          heading={home?.heading || 'hello'}
          text={home?.body[0]?.primary.hero_title[0].text || 'this is me'}
          // background={home.body[0].primary.background_image}
          variant="homepage"
        />

        <PlaneWrapper>
          <StyledPlane height={500} width={300} />
        </PlaneWrapper>

        <StyledBalloon
          src="/balloon.png"
          alt="Balloon"
          height={100}
          width={100}
        />
        <StyledBalloon
          className="small"
          src="/balloon.png"
          alt="Balloon"
          height={100}
          width={100}
        />

        <Bio
          heading={home?.bio?.heading || PageContent.heading}
          content={home?.bio?.conten || ''}
          profilePic={home?.bio?.profile_pic}
        />

        <FeaturedBlogs
        blogs={home?.blog_list}
        variant="homepage"
        heading={home.blog_heading}
        content="hello"
        buttonText='lets go'
        />

        <ParallaxComponent variant="planeLeftToRight" />

        <FeaturedProjects
        projects={home?.project_list}
        variant="homepage"
        heading='Projects'
        content='yolo'
        buttonText='helll yea'
        

        />

        <ParallaxComponent variant="planeRightToLeft" />

        <ParallaxComponent variant="cloudLeftToRight" />

        <About />

        <ContactForm />
      </Wrapper>
    </Layout>
  )
}
export default IndexPage

// export async function getStaticProps({ preview = false, previewData }) {
//   const allHomepage = await getAllHomepage(previewData);

//   return {
//     props: { preview, allHomepage },
//   };
// }

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`

const PlaneWrapper = styled.div`
  display: block;
  position: relative;
  height: 112rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: -100rem;
  div {
    width: 100%;
  }
`

const StyledPlane = styled(Plane)`
  position: absolute;
  animation-name: ${acrossScreen};
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const StyledBalloon = styled(Balloon)`
  height: 18rem;
  left: 40%;
  position: absolute;
  animation-name: ${bottomToTop};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &.small {
    height: 6rem;
    animation-duration: 60s;
    animation-name: ${bottomToTopSlow};
    overflow: hidden;
  }
`
