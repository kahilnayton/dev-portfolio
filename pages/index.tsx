import styled from 'styled-components'

import Layout from '../components/Layout'
import { colors } from '../styles/colors'
import { createClient } from '../prismicio'
import {
  acrossScreen,
  bottomToTop,
  bottomToTopSlow,
} from '../styles/animations'
import { About } from '../components/sections'
import { Hero } from '../components/sections'
import { ContactForm } from '../components/sections'
import { FeaturedBlogs } from '../components/sections'
import { FeaturedProjects } from '../components/sections'
import ParallaxComponent from '../components/_ui/ParallaxComponent'
import { Plane, Balloon } from '../components/_ui/icons'
import Head from 'next/head'
import { PageContent } from '../lib/constants'

// import Image from 'next/image';

import { getAllHomepage } from '../lib/api'
import { Bio } from '../components/sections'
import { SEO } from '../components/SEO'
import { GetStaticProps } from 'next/types'
// import Reveal from 'react-reveal/Reveal';

// Turn this into a generic
type HomePageProps = {
  heading:any
   bio: any
   blog_heading: any
   blog_list: any
   body: any
   contact_heading: any
   contact_list: any
   content: any
   project_heading: any
   project_list: any
} 

type HomeTemplate = {
  page: {
    data: HomePageProps
  } 
}

const IndexPage = ({ page }: HomeTemplate) => {
  const {heading, bio, blog_heading, blog_list, body, contact_heading, contact_list, content, project_heading, project_list } = page.data
  console.log(blog_list, 'blog_list');
  
  const Seo = body[1].primary || SEO

  return (
    <Layout>
      <Head>
        {/* General */}
        <title>{Seo?.site_name}</title>
        <meta name="description" content={Seo.description} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
          heading={heading || 'hello'}
          text={body[0]?.primary.hero_title[0].text || 'this is me'}
          // background={home.body[0].primary.background_image}
          variant="homepage"
        />

        <PlaneWrapper>
          <StyledPlane height={500} width={300} />
        </PlaneWrapper>

        <StyledBalloon height={100} width={100} />
        <StyledBalloon
          // @ts-ignore
          className="small"
          src="/balloon.png"
          alt="Balloon"
          height={100}
          width={100}
        />

        <Bio
          heading={bio?.heading || PageContent.heading}
          content={bio?.conten || ''}
          profilePic={bio?.profile_pic}
        />

        <FeaturedBlogs
          blogs={blog_list}
          variant="homepage"
          heading={blog_heading || 'Blogs'}
          content="hello"
          buttonText="lets go"
        />

        <ParallaxComponent variant="planeLeftToRight" />

        <FeaturedProjects
          projects={project_list}
          variant="homepage"
          heading="Projects"
          content="yolo"
          buttonText="helll yea"
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

export const getStaticProps: GetStaticProps = async ({
  previewData,
}) => {
  const client = createClient({ previewData })
  const page = await client.getSingle('home')
  

  return {
    props: {
      page,
    },
  }
}

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
    border: solid green;
    animation-duration: 60s;
    animation-name: ${bottomToTopSlow};
    overflow: hidden;
  }
`
