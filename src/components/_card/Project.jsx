import React from "react";
import { Link } from "gatsby";
import { Rubric } from "../../styles/typography";
import styled from "@emotion/styled";
import colors from "../../styles/colors";
import dimensions from '../../styles/dimensions';

const CardContainer = styled(Link)`
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
        color: #fff;
      }
      
      > div:last-child {
        background-color: ${colors.teal600};
        
        &::before {
          transform: scaleY(1);
          background-color: ${colors.teal600};
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
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
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
  
  @media(min-width: ${dimensions.desktopUp}) {
    .is-dense & {
      padding: 3.2rem 2.4rem;
    
      h4 {
        font-size: 2.1rem;
      }
    }
  }
`;

const ProjectCard = ({ uid, title, image, type, topic, preview_text }) => {
  let trimmed_preview_text;

  if (preview_text) {
    trimmed_preview_text = preview_text > 200 ? `${preview_text.substr(0,200)} …` : preview_text;
  }

  return (
    <CardContainer to={`/project/${uid}`}>
      {image && (
        <CardImage>
          <img src={image.url} alt={image.alt} />
        </CardImage>
      )}

      <CardContent>
        {(topic || type) && (
          <Rubric>
            <span>{topic}</span>
            <span>{type}</span>
          </Rubric>
        )}

        <h4>{title}</h4>

        {trimmed_preview_text && <p>{trimmed_preview_text}</p>}
      </CardContent>
    </CardContainer>
  )
};

export default ProjectCard;
