import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { dimensions, colors } from './'

export const TypographyStyles = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  li,
  div,
  input,
  textarea,
  button {
    font-family: 'Benton Sans', sans-serif;
  }

  h1 {
    color: ${colors.grey500};
    font-size: 5.2rem;
    line-height: 1.25;
    font-weight: 400;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 6.6rem;
      line-height: 1.2;
    }
  }

  h2 {
    color: ${colors.grey500};
    font-size: 4.2rem;
    line-height: 1.25;
    font-weight: 400;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 5.2rem;
      line-height: 1.2;
    }
  }

  h3 {
    color: ${colors.grey500};
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 400;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 4.2rem;
      line-height: 1.32;
    }
  }

  h4 {
    color: ${colors.grey500};
    font-size: 2.4rem;
    line-height: 1.25;
    font-weight: 400;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 3rem;
    }
  }

  h5 {
    color: ${colors.grey500};
    font-size: 1.8rem;
    line-height: 1.33;
    font-weight: 400;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 2.4rem;

      &.is-small {
        font-size: 1.8rem;
      }
    }
  }

  h6 {
    color: ${colors.grey500};
    font-size: 1.4rem;
    line-height: 1.33;
    font-weight: 600;

    @media (min-width: ${dimensions.tabletLandscapeUp}px) {
      font-size: 2.1rem;

      .is-small {
        font-size: 1.6rem;
      }
    }
  }

  p {
    color: ${colors.grey400};
    font-size: 1.8rem;
    line-height: 1.55;

    & + & {
      margin-top: 2.4rem;
    }

    &.is-small {
      font-size: 1.6rem;
    }

    &.is-large {
      font-size: 2.1rem;
    }
  }

  a {
    color: ${colors.blue};
    &:hover {
      cursor: pointer;
    }
  }
`

export const Rubric = styled.span`
  display: inline-block;
  color: ${colors.red500};
  font-size: 1.8rem;
  font-weight: 600;

  & + * {
    margin-top: 0.4rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    font-size: 2.1rem;

    & + * {
      margin-top: 1.6rem;
    }
  }
`
