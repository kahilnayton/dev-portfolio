import styled from 'styled-components';
import Head from 'next/head';

import Layout from '../components/Layout';
import { colors } from '../styles/colors';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeaturedProjects from '../components/FeaturedProjects';
import { getAllProjectPage } from '../lib/api';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Projects = props => {
  const projectPage = props.allProjects.allProject_pages.edges[0].node;
  const Seo = projectPage.body[1].primary;

  return (
    <Layout>
      <Head>
        {/* General */}
        <title>{Seo.site_name}</title>
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
          content={Seo.preview_image.url}
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
          heading={projectPage.heading}
          text={'Thanks for dropping by!'}
          background={projectPage.body[0].primary.background_image}
          variant="projectPage"
        />
        <FeaturedProjects
          projects={projectPage.projects_list}
          variant="projectPage"
          project_heading={projectPage.project_heading}
        />
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps({ preview = false, previewData }) {
  const allProjects = await getAllProjectPage(previewData);

  return {
    props: { preview, allProjects },
  };
}
