import React from 'react';
import { Link } from 'gatsby';
// import { Rubric } from "../../styles/typography";

import styled from '@emotion/styled';
import colors from '../../styles/colors';
import gradients from '../../styles/gradients';
import dimensions from '../../styles/dimensions';
import ExternalLink from '../_ui/ExternalLink';
import ButtonLink from '../_ui/ButtonLink';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 0.3rem 2rem rgba(0,0,0,0.05);
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    &:hover {
      img {
        transform: scale(1.04);
        transition: transform 0.24s ease-in-out;
      }
      
      h4,
      p,
      span {
        /* color: #fff; */
      }
      
      > div:last-child {
        background: ${gradients.purpleRed};
        
        &::before {
          transform: scaleY(1);
          /* background-color: ${colors.grey900}; */
        }
      }
    }
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 66.6667%;
  overflow: hidden;

  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transition: transform 0.32s ease-out;
    object-fit: cover;
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: ${colors.grey200};
    mix-blend-mode: multiply;
    transition: transform 0.12s ease-in-out;
  }
`;

const CardContent = styled.div`
  position: relative;
  flex: 1 1 100%;
  padding: 3.2rem 2.4rem;
  z-index: 10;
  transition: background 0.12s ease-in-out, color 0.12s ease-in-out;

  p {
    margin-top: 1.6rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding: 3.2rem 3.2rem 4.8rem;

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 100%;
      left: 0;
      width: 100%;
      height: 1.6rem;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: transform 0.12s ease-in-out;
    }
  }

  @media (min-width: ${dimensions.desktopUp}) {
    .is-dense & {
      padding: 3.2rem 2.4rem;

      h4 {
        font-size: 2.1rem;
      }
    }
  }
`;

const ButtonContainer = styled.a`
  position: relative;
  display: inline-block;
  padding: 1.6rem 3.33vw 1.4rem;
  background: ${colors.grey200};
  color: ${colors.grey900};
  font-size: 1.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  transition: background 0.08s ease-in-out, color 0.12s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${colors.red};
    color: #fff;
  }
`;

const ProjectCard = props => {
  const { uid, title, image, description } = props;

  console.log(props);

  return (
    <CardContainer>
      {image && (
        <CardImage>
          <img src={image.url} alt={image.alt} />
        </CardImage>
      )}

      <CardContent>
        <h4>{title}</h4>

        {description && <p>{description}</p>}
      </CardContent>
      <ButtonContainer href={props.projectLink}>See Project</ButtonContainer>
      <ButtonLink to={`/project/${uid}`}>More Info</ButtonLink>
    </CardContainer>
  );
};

export default ProjectCard;
