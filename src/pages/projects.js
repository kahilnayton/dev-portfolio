import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Hero from '../components/Hero';
import SEO from 'components/SEO';
import ContactForm from '../components/ContactForm';
import FeaturedProjects from '../components/FeaturedProjects';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Projects = ({ data }) => {
  const projectPage = data.prismic.allProject_pages.edges[0].node;

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

export const query = graphql`
  {
    prismic {
      allProject_pages {
        edges {
          node {
            title
            body {
              ... on PRISMIC_Project_pageBodyHero {
                type
                label
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
            }
            _meta {
              uid
            }
            projects_list {
              project {
                ... on PRISMIC_Project {
                  title
                  description
                  project_gif
                  project_image
                  tech_stack {
                    tech
                  }
                  project_link {
                    ... on PRISMIC__ExternalLink {
                      target
                      url
                    }
                  }
                  _meta {
                    uid
                  }
                  release_date
                }
              }
            }
          }
        }
      }
    }
  }
`;
