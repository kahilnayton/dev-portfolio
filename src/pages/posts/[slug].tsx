import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import styled from 'styled-components'
import Head from 'next/head'
import { PrismicRichText } from '@prismicio/react'
import { useRouter } from 'next/router'
import { predicate } from '@prismicio/client'
import { asImageSrc, asText } from '@prismicio/helpers'

import { CMS_NAME } from '../../lib/constants'
import { PostDocumentWithAuthor } from '../../lib/types'
import { createClient } from '../../lib/prismic'
import Layout from '@/components/Layout'
import { Hero, TechStack } from '@/components/sections'
import { colors, dimensions } from '@/styles'

type PostProps = {
  preview: boolean
  post: any
  morePosts: any[]
}

export default function Post({ post, morePosts, preview }: PostProps) {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      {/* <Hero /> */}
      <BlogWrapper>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {asText(post.data.title)} | Next.js Blog Example with{' '}
                  {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={asImageSrc(post.data.cover_image, {
                    width: 1200,
                    height: 600,
                    fit: 'crop',
                  })}
                />
              </Head>

              {post?.data.description?.length > 0 && (
                <BlogDescription>
                  <PrismicRichText
                    field={post?.description}
                    components={{
                      paragraph: ({ children }) => (
                        <blockquote>{children}</blockquote>
                      ),
                    }}
                  />
                </BlogDescription>
              )}
              {post?.data.tech_stack.length > 0 && (
                <TechStack stack={post?.data.tech_stack} />
              )}
            </article>

            {morePosts && morePosts.length > 0 && (
              <p>fix this</p>
              //   <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </BlogWrapper>
    </Layout>
  )
}

export async function getStaticProps({
  params,
  preview = false,
  previewData,
}: GetStaticPropsContext<{ slug: string }>): Promise<
  GetStaticPropsResult<PostProps>
> {
  const client = createClient({ previewData })

  const [post, morePosts] = await Promise.all([
    // @ts-ignore
    client.getByUID<any>('blog', params.slug),
    // @ts-ignore
    client.getAllByType<any>('blog', {
      limit: 2,
    }),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: { preview, post, morePosts },
    }
  }
}

export async function getStaticPaths() {
  const client = createClient()

  // @ts-ignore
  const allPosts = await client.getAllByType('blog')

  return {
    paths: allPosts.map((post) => `/posts/${post.uid}`),
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
