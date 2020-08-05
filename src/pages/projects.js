import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import About from '../components/About';
import Hero from '../components/Hero';
import SEO from 'components/SEO';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedProjects from '../components/FeaturedProjects';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Projects = ({ data }) => {
  const page = data.prismic.allProject_pages.edges[0].node;
  const projects = data.prismic.allProjects;

  console.log(projects)

  return (
    <Layout>
      <Wrapper>
        <Hero
          // heading={page.heading}
          // text={page.body[0].primary.hero_title[0].text}
          background={page.body[0].primary.background_image}
          variant="projects page"
        />
      <FeaturedProjects
          projects={projects.project_list}
          variant="projects"
          project_heading={projects.project_heading}
        />
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
          }
        }
      }
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
            project_image
            project_link {
              ... on PRISMIC__ExternalLink {
                target
                url
              }
            }
            description
            _meta {
                    uid
                  }
            project_gif
            title
          }
        }
      }
    }
  }
`;
