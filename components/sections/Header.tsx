import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Inner } from '../../styles/structure'
import { colors } from '../../styles/colors'
import gradients from '../../styles/gradients'
import dimensions from '../../styles/dimensions'
import { LogoLink } from '../_ui'
import SocialBar from './SocialBar'

const headerHeightMobile = '6rem'
const headerHeightDesktop = '6rem'

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobile = () => {
    const bodyClasses = document.getElementsByTagName('body')[0].classList
    bodyClasses.toggle('is-locked')
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer
      className={`${isOpen ? 'is-open' : ''} ${isSticky ? 'is-sticky' : ''}`}
    >
      <HeaderBar>
        <HeaderInner>
          <LogoLink />
          <HeaderLinks>
            <SocialBar />
          </HeaderLinks>

          <HeaderHamburger
            as="button"
            type="button"
            aria-label="burger"
            onClick={toggleMobile}
          >
            <span></span>
          </HeaderHamburger>
        </HeaderInner>
      </HeaderBar>

      <HeaderMobile>
        <MobileLinks>
          <MobileToggle>
            <MobileContent>
              <Link onClick={toggleMobile} href="/">
                Home
              </Link>
              <Link onClick={toggleMobile} href="/contact">
                Contact
              </Link>
              <Link onClick={toggleMobile} href="/projects">
                Projects
              </Link>
              <Link onClick={toggleMobile} href="/blog">
                Blog
              </Link>
            </MobileContent>
            <SocialBar variant="burger" toggleMobile={toggleMobile} />
          </MobileToggle>
        </MobileLinks>
      </HeaderMobile>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  & + * {
    margin-top: ${headerHeightMobile};
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    & + * {
      margin-top: ${headerHeightDesktop};
    }
  }
`

const HeaderBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: ${headerHeightMobile};
  padding: 2.2rem 0 2rem;
  background: ${gradients.purpleRedCircle};
  transition: box-shadow 0.12s ease-in-out;
  z-index: 10;

  .is-sticky &,
  .is-open & {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.06);
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    height: ${headerHeightDesktop};
    box-shadow: none;
  }
`

const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    height: 3.2rem;
    width: 3.2rem;
    display: block;
  }

  a {
    h4 {
      color: ${colors.grey100};
      font-size: 2.4rem;
      display: inline-block;
      width: 20rem;

      &:hover {
        color: ${colors.blue};
      }
    }
  }
`

const HeaderLinks = styled.div`
  display: none;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: flex-end;
  }
  a {
    color: ${colors.red500};
  }
`

const HeaderHamburger = styled.input`
  display: block;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-72%);
  height: 2.3rem;
  cursor: pointer;

  > span {
    display: block;
    position: relative;
    width: 2.4rem;
    height: 0.2rem;
    background-color: ${colors.grey100};
    transition: all 0.4s ease;
    transform-origin: center center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: inherit;
      transition: all 0.4s ease;
    }

    &::before {
      top: -0.6rem;
    }

    &::after {
      top: 0.6rem;
    }
  }

  .is-open & {
    span {
      transform: rotate(135deg);

      &::before,
      &::after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    right: 3.5rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: none;
  }
`

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: ${headerHeightMobile};
  width: 100%;
  height: calc(100vh - ${headerHeightMobile});
  opacity: 0;
  visibility: hidden;
  background-color: ${colors.grey100};
  user-select: none;

  .is-open & {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  a {
    font-size: 1.6rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: none;
  }
`

const MobileLinks = styled.ul`
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const MobileToggle = styled.div`
  position: relative;
  padding: 2.4rem 0 2rem;
  transition: background 0.08s ease-in-out;
  cursor: pointer;

  svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    fill: ${colors.grey500};
    display: block;
    width: 2rem;
    height: 1.3rem;
    transform-origin: center center;
    transition: transform 0.08s ease-in-out;
  }

  a {
    font-weight: 400;
  }

  .is-open > & {
    background-color: ${colors.grey100};

    a {
      color: #fff;
      fill: ${colors.red};
    }
  }
`

const MobileContent = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .is-open > & {
    display: block;
  }

  li {
    & + * {
      margin-top: 1.6rem;
    }
  }

  a {
    font-size: 2.1rem;
    font-weight: 600;
    margin: 1rem 0;
    color: ${colors.grey600};

    &:hover {
      color: ${colors.blue};
    }
  }
`
