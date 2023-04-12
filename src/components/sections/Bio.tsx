import { useEffect, useRef, useState } from 'react'
import type { LottiePlayer } from 'lottie-web'
import Image from 'next/image'
// import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import { Inner, colors, dimensions } from '@/styles'
import { PAGE_DATA } from '@/lib/constants'

type BioProps = {
  heading?: string
  content?: string
  profilePic?: string
}

export const Bio = ({
  heading = PAGE_DATA.bioData.heading,
  content = PAGE_DATA.bioData.content,
  profilePic = PAGE_DATA.bioData.profilePic,
}: BioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/helicopter.json',
      })

      return () => animation.destroy()
    }
  }, [lottie])
  return (
    <Inner>
      <BioContainer>
        <h1>{heading}</h1>
        <p>{content}</p>
        <Image fill alt="alt" src={profilePic}></Image>
        <div ref={ref} />
      </BioContainer>
    </Inner>
  )
}

const BioContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  margin-bottom: 4rem;
  position: relative;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 1rem 1rem 1rem rgba(46, 54, 68, 0.03);

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    margin-bottom: 8rem;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    height: auto;
    transform: translate(10px, -60px);
    overflow: hidden;
  }

  p {
    max-width: 50rem;
  }

  h1 {
    margin-bottom: 1rem;
    line-height: 1;
    display: inline-block;
    font-size: 3.6rem;
    background: linear-gradient(transparent 1.2rem, ${colors.lightPurple} 1rem);
  }
  em {
    font-family: 'Zallord';
  }
`

const HelicopterAnimation = styled.div`
  height: 20rem;
  width: 20rem;
`
