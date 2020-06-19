import React from 'react';
import { graphql, Link } from 'gatsby';
// import SliceZone from '../components/SliceZone';
import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';

const IndexPage = ({ data }) => {
  const home = data.prismic.allHomes.edges[0].node;
  // console.log(home.body[0].primary.background_image.url);

  return (
    <Layout>
      <Hero
        heading={home.heading}
        text={home.body[0].primary.text}
        background={home.body[0].primary.background_image}
        variant="homepage"
      />

      <About />

      {/* <Projects /> */}

      <FeaturedProjects
        projects={home.project_list}
        variant="homepage"
        project_heading={home.project_heading}
      />

      <ContactForm />
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
          }
        }
      }
    }
  }
`;
