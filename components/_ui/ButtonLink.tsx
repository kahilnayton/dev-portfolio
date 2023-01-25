import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { colors } from '../../styles/colors'
import gradients from '../../styles/gradients'
import dimensions from '../../styles/dimensions'

type ButtonLinkProps = {
  title: string
  href: string
}

export default function ButtonLink({href, title}: ButtonLinkProps) {

  return (
    <Link href={href}>
      <ButtonContainer>{title}</ButtonContainer>
    </Link>
  )
}

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 1.6rem 6.6vw 1.4rem;
  background: ${colors.grey200};
  color: ${colors.grey900};
  font-size: 1.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  transition: background 0.08s ease-in-out, color 0.12s ease-in-out;
  a {
    color: ${colors.grey900};
  }

  &:hover {
    cursor: pointer;
    background: ${gradients.purpleRed};
    color: #fff;
    a {
      color: #fff;
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding: 1.6rem 3.33vw 1.4rem;
  }
`