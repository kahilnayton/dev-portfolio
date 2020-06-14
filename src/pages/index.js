import React from 'react';
import { graphql, Link } from 'gatsby';
// import SliceZone from '../components/SliceZone';
// import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
// import ReactTypingEffect from 'react-typing-effect';
import { window } from 'browser-monads';

const IndexPage = ({ data }) => {
  console.log(data.prismic)
  return (
    <>
      {/* <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} /> */}
      <Header />

      <main>
        <section id="hero" className="hero">
          <div className="titlebox">
            <div className="hero-text-container">
              {/* <ReactTypingEffect
                className="hero-title developer"
                text=">Full-Stack Developer."
              /> */}
            </div>
            <h6 className="hero-subtitle">
              I am a full-stack developer who loves to help organizations find
              creative solutions to their digitally-based problems.
            </h6>
          </div>
        </section>

        <About />

        <Projects />

        <ContactForm />
      </main>

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
