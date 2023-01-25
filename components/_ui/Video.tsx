/* eslint-disable jsx-a11y/media-has-caption */

import React, { createRef, useEffect } from 'react'
import styled from 'styled-components'
// @ts-ignore
import Fade from 'react-reveal/Fade'

import dimensions from '../../styles/dimensions'



export default function Video(props: any) {
  let videoContainer = createRef()
  useEffect(() => {
    const video = document.createElement('video')
    video.autoplay = true
    video.autoplay = true
    video.loop = false
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('playsinline', 'true') // fixes autoplay in webkit (ie. mobile safari)
    video.setAttribute('muted', 'true') // fixes autoplay in webkit (ie. mobile safari)

    const source = document.createElement('source')
    source.src = props.source.url
    source.type = 'video/mp4'
    video.appendChild(source)

    // contentNode.appendChild(video);
  }, [])

  return (
    <VideoContainer>
      <Fade>
        <VideoContent ref={videoContainer} />
      </Fade>
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  transform: translate(10px, 150px);

  &.Illustration--hero {
    display: none;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    &.Illustration--hero {
      display: block;
    }
  }
`

const VideoContent = styled.div<{ref: any}>`
  video {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    height: auto;
    overflow: hidden;
  }
`