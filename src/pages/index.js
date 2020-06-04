import React from 'react';
import { graphql, Link } from 'gatsby';
// import SliceZone from '../components/SliceZone';
// import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ReactTypingEffect from 'react-typing-effect';
import { window } from 'browser-monads';

const IndexPage = props => {
  return (
    <>
      {/* <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} /> */}
      <Header />

      <main>
        <section id="hero" className="hero">
          <div className="titlebox">
            <div className="hero-text-container">
              <ReactTypingEffect
                className="hero-title developer"
                text=">Full-Stack Developer."
              />
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
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_content
                  hero_title
                  background_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                label
                primary {
                  section_title
                }
                fields {
                  button_label
                  call_to_action_title
                  button_destination {
                    ... on PRISMIC_Page {
                      _meta {
                        uid
                      }
                    }
                  }
                  content
                  featured_image
                }
              }
              ... on PRISMIC_HomepageBodyPrice_list {
                type
                label
                fields {
                  price_list_description
                  price_list_title
                  price_per_month
                  price_type
                }
                primary {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
