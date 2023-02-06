import React from 'react'
import styled from 'styled-components'

import { Inner } from '../../styles/structure'
import { colors } from '../../styles/colors'
import dimensions from '../../styles/dimensions'
import { ButtonContainer } from '../../styles/components'
import { ButtonLink } from '../_ui'
import { Content } from '../_ui/Content'
import { BlogsGrid } from '../_grid'
import { BlogCard, CardProps } from '../_card'
import CloudComponent from '../_ui/CloudComponent'
import { BlogProps, FeaturedSectionProps } from './types'

export const FeaturedBlogs = ({
  heading,
  content,
  buttonText,
  destination,
  blogs,
  variant,
}: FeaturedSectionProps & BlogProps) => {
  
  let blogsHeading

  return (
    <BlogsContainer className={`${variant ? `FeaturedBlogs--${variant}` : ''}`}>
      <Inner>
        <CloudComponent variant="blog" direction="left" distance="10rem" />
        <h1>Blog</h1>
        {(heading || content || (buttonText && destination)) && (
          <header>
            <div>
              {blogsHeading}
              {content && <Content content={content} />}
            </div>
          </header>
        )}

        {blogs && blogs.length > 0 && (
          <BlogsGrid dense={blogs.length > 3}>
            {blogs.map(({ ...blog }: CardProps, i) => {
              const { uid, blog_image, title, preview_text, release_date } =
                blog
              return (
                <li key={i}>
                  <BlogCard
                    uid={uid}
                    blog_image={blog_image}
                    title={title}
                    preview_text={preview_text}
                    release_date={release_date}
                  />
                </li>
              )
            })}
          </BlogsGrid>
        )}
        {variant === 'blogPage' ? (
          <ButtonContainer>
            <ButtonLink title="Home" href="/" />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonLink title="More Blogs" href="/blog" />
          </ButtonContainer>
        )}
      </Inner>
    </BlogsContainer>
  )
}

const BlogsContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 4rem;

  h1 {
    padding: 3rem 0;
    color: ${colors.grey200};
    font-family: 'Zallord';
  }

  & + * {
    margin-top: 6.4rem;
  }

  header {
    > div {
      > * + * {
        margin-top: 1.6rem;
      }

      & + * {
        margin-top: 3.2rem;
      }
    }

    & + * {
      margin-top: 4rem;
    }
  }

  & + * {
    margin-top: 6.4rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    margin-top: 12rem;
    & + * {
      margin-top: 8rem;
    }

    header {
      display: flex;
      align-items: center;

      > div {
        flex: 1 1 100%;

        > * {
          max-width: 62.8rem;
        }
      }

      a {
        flex-shrink: 0;
      }

      & + * {
        margin-top: 5.6rem;
      }
    }
  }
`
