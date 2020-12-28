import React from 'react';
import styled from '@emotion/styled';
// import dimensions from '../styles/dimensions';
// import colors from 'styles/colors';

const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 33rem;
  width: 100%;
`;
const TechContainer = styled.div`
  padding-left: 2.3rem;

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
  // debugger;
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
