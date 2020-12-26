import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Hero from '../components/Hero';
import SEO from 'components/SEO';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Blog = ({ data }) => {
  const blogPage = data.prismic.allBlog_pages.edges[0].node;

  return (
    <Layout>
      <SEO
        title={'Blogs'}
        description={'Page of blogs by Kahil Nayton'}
        image={null}
      />
      <Wrapper>
        <Hero
          heading={blogPage.heading}
          // text={''}
          background={blogPage.body[0].primary.background_image}
          variant="blogPage"
        />
        <FeaturedBlogs
          blogs={blogPage.blog_list}
          variant="blogPage"
          blog_heading={blogPage.blog_heading}
        />
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  {
    prismic {
      allBlog_pages {
        edges {
          node {
            title
            _meta {
              uid
            }
            body {
              ... on PRISMIC_Blog_pageBodyHero {
                type
                label
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
            }
            blog_list {
              blog {
                ... on PRISMIC_Blog {
                  title
                  description
                  blog_image
                  tech_stack {
                    tech
                  }
                  blog_link {
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
