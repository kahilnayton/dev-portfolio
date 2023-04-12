import styled from 'styled-components'
import { dimensions } from '.'

export const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  height: 100%;
  max-width: 120rem;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  @media (min-width: ${dimensions.desktopLargeUp}px) {
    max-width: 126.4rem;
  }
`

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 97.4rem;
  margin: 0 auto;
`
