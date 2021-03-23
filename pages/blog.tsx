
import styled from 'styled-components';

import Layout from '../components/Layout';
import {colors} from '../styles/colors';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeaturedBlogs from '../components/FeaturedBlogs';

import { getAllBlogPage } from '../lib/api';

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`;

const Blog = (props) => {
  const blogPage = props.allPosts.allBlog_pages.edges[0].node;

  return (
    <Layout>
      <Wrapper>
        <Hero
          heading={blogPage.heading}
          text={'blogs'}
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

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllBlogPage(previewData);

  return {
    props: { preview, allPosts },
  };
}
