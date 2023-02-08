import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import Fade from 'react-reveal/Fade'
import { Cloud } from './icons'

import z from '../../styles/base'
import { isGeneratorObject } from 'util/types'

type CloudProps = {
  direction: string
  variant?: string
  distance: string
}

const CloudComponent = ({ direction, variant, distance }: CloudProps) => {
  return (
    <CloudContainer>
      {direction === 'left' && (
        <LeftCloud className={variant ? `Clouds-${variant}` : ''}>
          <Fade left distance={distance}>
            <Cloud width={50} height={50} />
          </Fade>
        </LeftCloud>
      )}
      {direction === 'right' && (
        <RightCloud className={variant ? `Clouds-${variant}--right` : ''}>
          <Fade right distance={distance}>
            <Cloud width={100} height={100} />
          </Fade>
        </RightCloud>
      )}
      {!direction && <Cloud width={100} height={100} />}
    </CloudContainer>
  )
}

const CloudContainer = styled.div`
  overflow: hidden;
  svg {
    width: 10rem;
  }

  .Clouds-notFound {
    right: 10rem;
    padding-top: 30rem;
  }
  .Clouds-notFound--right {
    right: 10rem;
    padding-top: 66rem;
  }
  .Clouds-blog {
    right: 10rem;
    padding-left: 12rem;
  }
  .Clouds-project {
    right: 20rem;
    padding-left: 18rem;
    transform: translateY(-10rem);
  }
  .Clouds-about {
    top: 40rem;
    margin-top: -7rem;
  }
`

const RightCloud = styled.div`
  display: block;
  position: absolute;
  right: 0rem;
  top: 0;
  margin-top: 2rem;
  z-index: ${z.modal};
`

const LeftCloud = styled.div`
  z-index: ${z.modal};
  display: block;
  position: absolute;
  left: 5rem;
  margin-top: -28rem;
  top: 24rem;
  position: absolute;
`

export default CloudComponent
