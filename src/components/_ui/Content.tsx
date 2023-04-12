import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

import { dimensions } from '@/styles/'
import { colors } from '@/styles/colors'

type ContentProps = {
  content?: any
}

export const Content = ({ content }: ContentProps) => {
  return (
    <ContentContainer>
      <RichText render={content} />
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  border: solid;
  > * {
    & + * {
      margin-top: 3.2rem;
    }

    & + p {
      margin-top: 1.6rem;
    }
  }

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    font-weight: 500;
  }

  > h1,
  > h2,
  > h3 {
    & + p {
      margin-top: 2.4rem;
    }
  }

  > h4,
  > h5,
  > h6 {
    & + p {
      margin-top: 0.6rem;
    }
  }

  a {
    display: inline;
    position: relative;
    color: inherit;
    background-image: linear-gradient(${colors.grey300}, ${colors.yellow});
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 0.2rem;
    padding-bottom: 0.2rem;
    transition: background 0.24s ease-in-out;

    &:hover {
      color: ${colors.orange200};
    }
  }

  ul,
  ol {
    list-style: initial;
    color: ${colors.grey800};
    font-size: 1.6rem;
    padding-left: 3.2rem;

    li {
      & + * {
        margin-top: 1.6rem;
      }
    }
  }

  .block-img {
    img {
      display: block;
      max-width: 100%;
    }

    p + &,
    & + * {
      margin-top: 3.2rem;
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    > * {
      & + * {
        margin-top: 4rem;
      }

      & + p {
        margin-top: 2.4rem;
      }
    }

    > h1,
    > h2,
    > h3 {
      & + p {
        margin-top: 3.2rem;
      }
    }

    > h4,
    > h5,
    > h6 {
      & + p {
        margin-top: 1.6rem;
      }
    }

    li,
    p {
      font-size: 1.8rem;
      line-height: 1.55;
    }

    .block-img {
      p + &,
      & + * {
        margin-top: 4rem;
      }
    }
  }
`
