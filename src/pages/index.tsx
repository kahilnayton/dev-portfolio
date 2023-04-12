import React, { useRef } from 'react'
import Head from '@/components/Head'
import styled from 'styled-components'
import { createClient } from '../lib/prismic'
import { PostDocumentWithAuthor } from '../lib/types'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import {
  About,
  Bio,
  ContactForm,
  FeaturedPosts,
  Hero,
} from '../components/sections'
import { acrossScreen, bottomToTop, bottomToTopSlow } from '@/styles/animations'
import { Balloon, Plane } from '@/components/_ui'
import { colors } from '@/styles/colors'
import { useParallax } from 'react-scroll-parallax'
import { PlaneRight, Cloud, PlaneTwo } from '@/components/_ui'

type IndexProps = {
  preview: boolean
  allPosts: PostDocumentWithAuthor[]
}

export default function Index({ preview, allPosts }: IndexProps) {
  const target = useRef<HTMLDivElement>()
  const cloud = useParallax({
    targetElement: target?.current,
    easing: 'easeOutQuad',
    translateX: [0, 100],
  })
  const planeLeft = useParallax({
    targetElement: target?.current,
    easing: 'easeOutQuad',
    translateX: [-300, 100],
    speed: 10,
  })
  const [heroPost, ...morePosts] = allPosts

  return (
    <Wrapper ref={target}>
      <Head title="Kahil Engineering" />
      <Hero />
      <Plane height={500} width={300} />

      <Balloon height={100} width={100} />

      <Balloon _className="animate" height={100} width={100} />

      <Bio />

      <FeaturedPosts posts={allPosts} />

      {/* @ts-ignore */}
      <div ref={planeLeft.ref}>
        <PlaneTwo />
      </div>

      {/* @ts-ignore */}
      <div ref={cloud.ref}>
        <Cloud height={100} width={700} />
      </div>

      <About />

      <ContactForm />
    </Wrapper>
  )
}

export async function getStaticProps({
  preview = false,
  previewData,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<IndexProps>> {
  const client = createClient({ previewData })

  //   @ts-ignore
  const allPosts = await client.getAllByType('blog', {
    orderings: [{ field: 'my.post.date', direction: 'desc' }],
  })

  return {
    props: { preview, allPosts },
  }
}

const Wrapper = styled.div`
  background: ${colors.blue};
  padding-bottom: 13rem;
`

const PlaneWrapper = styled.div`
  display: block;
  position: relative;
  height: 112rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: -100rem;
  div {
    width: 100%;
  }
`

const StyledPlane = styled(Plane)`
  position: absolute;
  animation-name: ${acrossScreen};
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const StyledBalloon = styled(Balloon)`
  height: 18rem;
  left: 40%;
  position: absolute;
  animation-name: ${bottomToTop};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
