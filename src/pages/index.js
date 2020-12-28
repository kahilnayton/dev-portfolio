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
import ParallaxComponent from '../components/ParallaxComponent';
import plane from '../images/plane.png';
import planeRight from '../images/planeRight.png';
import cloud from '../images/cloudOne.png';
// import Slide from 'react-reveal/Slide';
import Bio from '../components/Bio';
// import Reveal from 'react-reveal/Reveal';

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
          background_sharp={
            home.body[0].primary.background_imageSharp.absolutePath
          }
          variant="homepage"
        />

        <ParallaxComponent direction="right" variant="plane" plane={plane} />

        <Bio
          heading={home.bio.heading}
          content={home.bio.content}
          profilePic={home.bio.profile_pic}
        />

        <FeaturedBlogs
          blogs={home.blog_list}
          variant="homepage"
          blog_heading={home.blog_heading}
        />

        <FeaturedProjects
          projects={home.project_list}
          variant="homepage"
          project_heading={'Projects'}
        />

        <ParallaxComponent
          direction="left"
          variant="plane"
          planeRight={planeRight}
        />

        <ParallaxComponent variant="cloud" cloud={cloud} />

        <About />

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
            bio {
              ... on PRISMIC_Bio {
                heading
                content
                _meta {
                  uid
                }
                profile_pic
              }
            }
            content
            heading
            project_heading
            project_list {
              project {
                ... on PRISMIC_Project {
                  title
                  description
                  preview_text
                  release_date
                  _meta {
                    uid
                  }
                  project_image
                  project_imageSharp {
                    absolutePath
                  }
                  project_link {
                    ... on PRISMIC__ExternalLink {
                      url
                      target
                    }
                  }
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
                  background_imageSharp {
                    absolutePath
                  }
                }
              }
            }
            contact_heading
            blog_list {
              blog {
                ... on PRISMIC_Blog {
                  title
                  description
                  preview_text
                  release_date
                  _meta {
                    uid
                  }
                  blog_image
                  blog_imageSharp {
                    absolutePath
                  }
                  tech_stack {
                    tech
                  }
                  blog_link {
                    ... on PRISMIC__ExternalLink {
                      target
                      url
                    }
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
