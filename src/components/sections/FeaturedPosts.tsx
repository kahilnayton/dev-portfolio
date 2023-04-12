import React from 'react'
import styled from 'styled-components'

import { Inner, colors, dimensions, ButtonContainer } from '@/styles'
import { ButtonLink, Content, CloudComponent } from '@/components/_ui'
import { CardGrid } from '@/components/_grid'
import { CardPostProps, CardPost, CardProps } from '@/components/_card'

import { BlogProps, FeaturedSectionProps } from './types'
import { PAGE_DATA } from '@/lib/constants'

export const FeaturedPosts = ({
  heading = PAGE_DATA.featuredData.heading,
  content = PAGE_DATA.featuredData.content,
  buttonText = PAGE_DATA.featuredData.buttonText,
  destination = PAGE_DATA.featuredData.destination,
  posts,
  variant,
}: FeaturedSectionProps) => {
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

        {posts && posts.length > 0 && (
          <CardGrid dense={posts.length > 3}>
            {posts.map((post: any, i) => {
              const { blog_image, title, preview_text, release_date } =
                post.data

              return (
                <li key={i}>
                  <CardPost
                    uid={post.uid}
                    blog_image={blog_image}
                    title={title[0].text}
                    preview_text={preview_text}
                    release_date={release_date}
                  />
                </li>
              )
            })}
          </CardGrid>
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
