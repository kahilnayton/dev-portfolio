import React from 'react';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';
import CloudOne from '../vectors/cloudOne.svg';

const ParallaxWrapper = styled.div`
  img {
    height: 8rem;
    width: auto;
  }
`;

const ParallaxComponent = props => {
  return (
    <ParallaxWrapper>
      {props.direction === 'right' && (
        <Parallax x={[0, 140]}>
          <img src={props.plane || undefined} />
        </Parallax>
      )}
      {props.direction === 'left' && (
        <Parallax x={[140, 0]}>
          <img src={props.planeRight} />
        </Parallax>
      )}
      {props.variant === 'cloud' && (
        <Parallax x={[140, 0]}>
        <img src={props.cloud} />
        </Parallax>
      )}
    </ParallaxWrapper>
  );
};

export default ParallaxComponent;
