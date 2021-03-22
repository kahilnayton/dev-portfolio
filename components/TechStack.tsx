import React from 'react';
import styled from 'styled-components';
import dimensions from '../styles/dimensions';
// import Image from 'next/image';
// import colors from 'styles/colors';

const TechWrapper = styled.div`
  display: grid;
  grid-gap: 4rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  max-width: 33rem;
  width: 100%;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    max-width: 75%;
  }
`;
const TechContainer = styled.div`
  padding-left: 2.3rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: left;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
  }

  img {
    height: 4rem;
    /* width: 4rem; */
    &:hover {
      transform: scale(1.2);
    }
  }
  p {
  }
`;

const TechStack = props => {

  return (
    <TechWrapper>
      {props.stack.length > 0 &&
        props.stack.map((t, i) => (
          <TechContainer key={i}>
            <img src={t.tech[0].url} alt={t.alt} />
            <p>{t.alt}</p>
          </TechContainer>
        ))}
    </TechWrapper>
  );
};

export default TechStack;
