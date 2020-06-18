import React from 'react';
import { graphql, Link } from 'gatsby';
// import SliceZone from '../components/SliceZone';
// import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects'

const IndexPage = ({ data }) => {
const home = data.prismic.allHomes.edges[0].node

  return (
    <>
      {/* <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} /> */}

      <Hero
        heading={home.hero_heading}
        text={home.hero_text}
        background={home.hero_background}
        variant="homepage"
      />

      <Header />

      <About />

      <Projects />

      <FeaturedProjects projects={home.featured_projects} variant="homepage" />

      <ContactForm />

      <Footer />
    </>
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
              }
            }
            contact_heading
          }
        }
      }
    }
  }
`;
