
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import FeaturedProjects from '../components/FeaturedProjects';

import { getAllProjectPage } from '../lib/api';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Projects = ( props ) => {
  const projectPage = props.allProject_pages.edges[0].node;

  return (
    <Layout>
      <SEO
        title={'Projects'}
        description={'Page of projects by Kahil Nayton'}
        image={null}
      />
      <Wrapper>
        <Hero
          heading={projectPage.heading}
          text={'Thanks for dropping by!'}
          background={projectPage.body[0].primary.background_image}
          gatsby_image={
            projectPage.body[0].primary.background_imageSharp
          }
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

