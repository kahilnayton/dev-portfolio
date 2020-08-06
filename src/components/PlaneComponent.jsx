import React from 'react';
import Plane from '../images/plane5.png';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';

const PlaneWrapper = styled.div`
  img {
    height: 8rem;
    width: 8rem;
  }
`;

const PlaneComponent = props => {
  return (
    <PlaneWrapper>
      {props.direction === 'right' ? (
        <Parallax x={[0, 140]}>
          <img src={props.plane || undefined} />
        </Parallax>
      ) : (
        <Parallax x={[140, 0]}>
          <img src={props.plane} />
        </Parallax>
      )}
    </PlaneWrapper>
  );
};

export default PlaneComponent;
