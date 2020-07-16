import React from 'react';
import styled from '@emotion/styled';
// import colors from 'styles/colors';

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 20vw;
  align-items: center;

  img {
    grid-column: 1;
    height: 4rem;
    width: 100%;
  }
  p {
    grid-column: 2;
  }
`;

const TechStack = props => {
  return (
    <div>
      {props.stack.length > 0 &&
        props.stack.map((t, i) => (
          <TechWrapper key={i}>
            <img src={t.url} alt={t.alt} />
            <p>{t.alt}</p>
            {console.log(t)}
          </TechWrapper>
        ))}
    </div>
  );
};

export default TechStack;
