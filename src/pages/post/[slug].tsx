import { useRouter } from 'next/router'
import Head from 'next/head'
import * as prismicH from '@prismicio/helpers'
import ErrorPage from 'next/error'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import dimensions from '@/styles/dimensions'
import { colors } from '@/styles/colors'
import Layout from '@/components/Layout'
import { TechStack } from '@/components/sections'
import { Hero } from '@/components/sections'
import { getAllBlogsWithSlug, getBlog } from '@/lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prismicClient } from '@/utils/prismicHelpers'
import { BlogPostQuery, BlogPostSlugsQuery } from '@/utils/prismicQueries'

type BlogPostProps = {
  postProps: any
}

export default function Post ({ postProps }: BlogPostProps) {
  const { title, description, tech_stack, blog_image } = postProps.data
  
  if (!postProps) {
    return null
  }

  const router = useRouter()
  if (!router.isFallback && !postProps?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Hero
        text=""
        heading={title[0].text}
        background={blog_image}
        variant="blog"
      />
      <BlogWrapper>
        {description.length > 0 && (
          <BlogDescription>
            <RichText render={description} />
          </BlogDescription>
        )}
        {tech_stack.length > 0 && <TechStack stack={tech_stack} />}
      </BlogWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params
}) => {

  const client = prismicClient()
  
  try {
    const postProps = await client.getByUID('blog', params?.uid as string, {})
    return {
      props: {
        postProps,
      },
    }
  } catch (error) {
    console.log(error)
  }
  return {
    notFound: true,
  }
}

// Define Paths
export async function getStaticPaths() {
  const client = prismicClient()

  const pages = await client.getAllByType('blog')

  return {
    paths: pages?.map((page) => `/post/${page.uid}`),
    fallback: true,
  }
}


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
`

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
`
