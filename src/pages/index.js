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
import PlaneComponent from '../components/PlaneComponent';
import plane from '../images/plane5.png';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const IndexPage = ({ data }) => {
  const home = data.prismic.allHomes.edges[0].node;

  return (
    <Layout>
      <SEO
        title={home.social_title || 'Home'}
        description={home.social_description ? home.social_description : null}
        image={home.social_image ? home.social_image.url : null}
      />
      <Wrapper>
        <Hero
          heading={home.heading}
          text={home.body[0].primary.hero_title[0].text}
          background={home.body[0].primary.background_image}
          variant="homepage"
        />

        <PlaneComponent direction="right" plane={plane}/>

        <About />

        <FeaturedBlogs
          blogs={home.blog_list}
          variant="homepage"
          blog_heading={home.blog_heading}
        />
        
        {/* <PlaneComponent plane={planeTwo} /> */}

        <FeaturedProjects
          projects={home.project_list}
          variant="homepage"
          project_heading={'Projects'}
        />

        <ContactForm />
      </Wrapper>
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  {
    prismic {
      allHomes {
        edges {
          node {
            content
            heading
            project_heading
            project_list {
              project {
                ... on PRISMIC_Project {
                  title
                  description
                  _meta {
                    uid
                  }
                  project_image
                  project_link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                  release_date
                }
              }
            }
            contact_list {
              contact {
                ... on PRISMIC_Contact {
                  link_label
                  _linkType
                  _meta {
                    uid
                  }
                  link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
              }
            }
            body {
              ... on PRISMIC_HomeBodyHero {
                type
                label
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
            }
            contact_heading
            blog_list {
              blog {
                ... on PRISMIC_Project {
                  title
                  description
                  _meta {
                    uid
                  }
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
                }
              }
            }
            blog_heading
          }
        }
      }
    }
  }
`;
