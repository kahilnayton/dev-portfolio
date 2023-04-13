import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Logo } from './icons'

export const LogoLink = () => {
  return (
    <Link href="/">
      <ButtonContainer>
        <Logo width={200} height={100} />
      </ButtonContainer>
    </Link>
  )
}

const ButtonContainer = styled.div`
  svg {
    transform: translateY(3px);
    fill: #fff;
  }
`
