import React from 'react';
import styled from 'styled-components';

import { Inner } from '../styles/structure';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import ButtonLink from './_ui/ButtonLink';
import {ButtonContainer} from '../styles/components'
import Content from './_ui/Content';
import BlogsGrid from './_grid/BlogsGrid';
import BlogCard from './_card/BlogCard';
import CloudComponent from './CloudComponent'

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
`;

const FeaturedBlogs = props => {

  const {
    heading,
    content,
    buttonText,
    destination,
    blogs,
    variant,
  } = props;
  let blogsHeading;

  return (
    <BlogsContainer
      className={`${variant ? `FeaturedBlogs--${variant}` : ''}`}
    >
      <Inner>
      <CloudComponent variant='blog' direction='left' distance='10rem'/>
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
            {blogs.map((feature, i) => {
              return (
                <li key={i}>
                  <BlogCard
                    uid={feature.blog._meta.uid}
                    image={feature.blog.blog_image}
                    title={feature.blog.title[0].text}
                    textSnippet={feature.blog.preview_text}
                    publishDate={feature.blog.release_date}
                    description={feature.blog.description[0].text}
                  />
                </li>
              );
            })}
          </BlogsGrid>
        )}
        {props.variant === 'blogPage' ? (
          <ButtonContainer>
            <ButtonLink title="Home" href="/"/>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonLink title="More Blogs" href="/blog"/>
          </ButtonContainer>
        )}
      </Inner>
    </BlogsContainer>
  );
};

export default FeaturedBlogs;
