
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import colors from '../styles/colors';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';

import { getAllBlogPage } from '../lib/api';

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
          background={blogPage.body[0].primary.background_image}
          gatsby_image={
            blogPage.body[0].primary.background_imageSharp
          }
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

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllBlogPage(previewData);

  return {
    props: { preview, allPosts },
  };
}
