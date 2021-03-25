import styled from 'styled-components';

import Layout from '../components/Layout';
import { colors } from '../styles/colors';
import {
  acrossScreen,
  bottomToTop,
  bottomToTopSlow,
} from '../styles/animations';
import About from '../components/About';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedProjects from '../components/FeaturedProjects';
import ParallaxComponent from '../components/ParallaxComponent';
import { Plane, Balloon } from '../components/_ui/icons';
import Head from 'next/head';

// import Image from 'next/image';

import { getAllHomepage } from '../lib/api';
import Bio from '../components/Bio';
// import Reveal from 'react-reveal/Reveal';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

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
`;

const StyledPlane = styled(Plane)`
  position: absolute;
  animation-name: ${acrossScreen};
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

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
`;

const IndexPage = props => {
  const home = props.allHomepage.allHomes.edges[0].node;
  const Seo = home.body[1].primary;

  return (
    <Layout>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'kahilnayton'} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={Seo.url} key="ogurl" />
        <meta property="og:image" content={Seo.preview_image.url} key="ogimage" />
        <meta property="og:site_name" content={Seo.site_name} key="ogsitename" />
        <meta property="og:title" content={Seo.title} key="ogtitle" />
        <meta property="og:description" content={Seo.description} key="ogdesc" />
      </Head>
      <Wrapper>
        <Hero
          heading={home.heading}
          text={home.body[0].primary.hero_title[0].text}
          background={home.body[0].primary.background_image}
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
          heading={home.bio.heading}
          content={home.bio.content}
          profilePic={home.bio.profile_pic}
          video={home.bio.video}
        />

        <FeaturedBlogs
          blogs={home.blog_list}
          variant="homepage"
          blog_heading={home.blog_heading}
        />

        <ParallaxComponent variant="planeLeftToRight" />

        <FeaturedProjects
          projects={home.project_list}
          variant="homepage"
          project_heading={'Projects'}
        />

        <ParallaxComponent variant="planeRightToLeft" />

        <ParallaxComponent variant="cloudLeftToRight" />

        <About />

        <ContactForm />
      </Wrapper>
    </Layout>
  );
};
export default IndexPage;

export async function getStaticProps({ preview = false, previewData }) {
  const allHomepage = await getAllHomepage(previewData);

  return {
    props: { preview, allHomepage },
  };
}
