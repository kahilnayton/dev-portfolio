import React from 'react';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';

const PlaneWrapper = styled.div`
  img {
    height: 8rem;
    width: auto;
  }
`;

const PlaneComponent = props => {
  console.log(props)
  return (
    <PlaneWrapper>
      {props.direction === 'right' ? (
        <Parallax x={[0, 140]}>
          <img src={props.plane || undefined} />
        </Parallax>
      ) : (
        <Parallax x={[140, 0]}>
          <img src={props.planeRight} />
        </Parallax>
      )}
    </PlaneWrapper>
  );
};

export default PlaneComponent;
