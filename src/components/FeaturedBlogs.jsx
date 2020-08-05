import React from 'react';
import styled from '@emotion/styled';
import { Inner } from '../styles/structure';
import colors from 'styles/colors';
import dimensions from '../styles/dimensions';
// import RichText from '../components/RichText';
import Content from './_ui/Content';
import BlogsGrid from './_grid/BlogsGrid';
import GenericCard from './_card/GenericCard';
import { GrFormNextLink } from 'react-icons/gr';
import CloudComponent from './CloudComponent'

const BlogsContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 4rem;

  h1 {
    padding: 3rem 0;
    color: ${colors.grey200};
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

  console.log(props)

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

            {buttonText && destination && (
              <GrFormNextLink destination={destination} text={buttonText} />
            )}
          </header>
        )}

        {blogs && blogs.length > 0 && (
          <BlogsGrid dense={blogs.length > 3}>
            {blogs.map((feature, i) => {
              return (
                <li key={i}>
                  <GenericCard
                    uid={feature.blog._meta.uid}
                    image={feature.blog.project_image}
                    title={feature.blog.title[0].text}
                    description={feature.blog.description[0].text}
                  />
                </li>
              );
            })}
          </BlogsGrid>
        )}
      </Inner>
    </BlogsContainer>
  );
};

export default FeaturedBlogs;
