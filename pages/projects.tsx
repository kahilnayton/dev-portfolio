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
  console.log(props, 'project page');
  const projectPage = props.allProjects.allProject_pages.edges[0].node;

  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Projects I've worked on"
          key="description"
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
