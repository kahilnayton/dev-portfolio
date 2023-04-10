import styled from 'styled-components'

import Layout from '@/components/Layout'
import { colors } from '@/styles/colors'
import { Hero } from '@/components/sections'
import { ContactForm } from '@/components/sections'
import { FeaturedBlogs } from '@/components/sections'
import Head from 'next/head'

import { GetStaticProps } from 'next'
import { prismicClient } from '@/utils/prismicHelpers'
import { BlogLandingQuery } from '@/utils/prismicQueries'

type BlogLandingProps = {
  pageProps: {
    data: any
  }
}

export default function BlogLanding ({ pageProps }: BlogLandingProps) {
  const {heading, blog_heading, blog_list, body} = pageProps.data
  const Seo = body[1].primary

  return (
    <Layout>
      <Head>
        {/* General */}
        <title>{Seo.site_name}</title>
        <meta name="description" content={Seo.description} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'kahilnayton'} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={Seo.url} key="ogurl" />
        <meta
          property="og:image"
          content={Seo.preview_image.url}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={Seo.site_name}
          key="ogsitename"
        />
        <meta property="og:title" content={Seo.title} key="ogtitle" />
        <meta
          property="og:description"
          content={Seo.description}
          key="ogdesc"
        />
      </Head>
      <Wrapper>
        <Hero
          heading={heading}
          text=""
          background={body[0].primary.background_image}
          variant="blogPage"
        />
        <FeaturedBlogs
          posts={blog_list}
          variant="blogPage"
          heading={blog_heading}
          buttonText="yolo"
          content="content"
        />
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  previewData,
}) => {
  const client = prismicClient({ previewData })
  const page = await client.getAllByType('blog_page', {
    graphQuery: BlogLandingQuery
  })

  const pageProps = page[0]

  return {
    props: {
      pageProps,
    },
  }
}

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`
