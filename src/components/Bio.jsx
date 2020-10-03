import React from 'react';
import { Inner } from '../styles/structure';
import RichText from '../components/RichText';
import colors from 'styles/colors';
import dimensions from '../styles/dimensions';
import styled from '@emotion/styled';

const BioContainer = styled.div`
  background: ${colors.grey200};
  padding: 2rem;
  margin-bottom: 4rem;
  position: relative;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    margin-bottom: 8rem;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    height: auto;
    transform: translate(10px, -60px);
    overflow: hidden;
  }
`;


const Bio = props => {
  // console.log(props);
  return (
    <Inner>
      <BioContainer>
        <h1>{props.heading[0].text}</h1>
          <img src={props.profilePic.url} alt={props.profilePic.alt} />
        <RichText render={props.content} />
      </BioContainer>
    </Inner>
  );
};

export default Bio;
