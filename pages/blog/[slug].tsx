import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { RichText } from 'prismic-reactjs';

import styled from 'styled-components';
import dimensions from '../styles/dimensions';
import colors from '../../styles/colors';

import Layout from '../../components/Layout';
import TechStack from '../../components/TechStack';
import Hero from '../../components/Hero';

import { getAllPostsWithSlug, getPost } from '../../lib/api';

const BlogWrapper = styled.div`
  background: #fff;
  padding: 1.6rem 2.3rem 12rem 2.3rem;

  h2.tech-stack {
    font-size: 2.4rem;
    text-decoration: underline;
    margin-bottom: 1.6rem;
    padding-left: 2.3rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding: 1.6rem 4.6rem 12rem 4.6rem;
  }
`;

const BlogDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: auto;

  padding: 2rem 0rem 12rem;
  width: 100%;
  height: 100%;
  color: ${colors.grey900};

  h3 {
  }

  p {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .block-img {
    object-fit: cover;
  }

  img {
    align-self: center;
    box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.05);
    display: block;
    width: 100%;
    height: 100%;
    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      width: 60%;
    }
  }

  a {
    padding-top: 2rem;
    color: ${colors.blue};
  }

  pre {
    background: #53517bb3;
    color: #fff;
    padding: 1.6rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 1.4rem;
  }
  em {
    background: linear-gradient(transparent 1.2rem, ${colors.blue} 1rem);
  }
`;

const Blog = ({ data }) => {
  const blog = data.prismic.blogsByUID;

  if (!blog) {
    return null;
  }

  const router = useRouter();
  if (!router.isFallback && !caseStudy?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Hero
        heading={blog.edges[0].node.title}
        // background={blog.edges[0].node.blog_image}
        variant="blog"
      />
      <BlogWrapper>
        {blog.edges.length > 0 && (
          <BlogDescription>
            <RichText render={blog.edges[0].node.description} />
          </BlogDescription>
        )}
        {blog.edges.length > 0 && (
          <TechStack stack={blog.edges[0].node.tech_stack} />
        )}
      </BlogWrapper>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPost(params.slug, previewData);

  return {
    props: {
      preview,
      post: data?.post ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/blog/${node._meta.uid}`) || [],
    fallback: false,
  };
}
