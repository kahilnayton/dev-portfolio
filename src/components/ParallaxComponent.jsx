import React from 'react';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';
import z from '../styles/base';
// import CloudOne from '../vectors/cloudOne.svg';

const ParallaxWrapper = styled.div`
  overflow: hidden;
  z-index: ${z.modal};
  img {
    height: 8rem;
    width: auto;
    /* transform: translateY(20px); */
  }

  .parallax-outer {
    height: 14rem;
  }
`;

const ParallaxComponent = props => {
  return (
    <ParallaxWrapper>
      {props.direction === 'right' && (
        <Parallax x={[-40, 140]} y={[0, -46]}>
          <img src={props.plane || undefined} alt="cloud" />
        </Parallax>
      )}
      {props.direction === 'left' && (
        <Parallax x={[140, -50]} y={[10, 50]}>
          <img src={props.planeRight} alt="cloud two" />
        </Parallax>
      )}
      {props.variant === 'cloud' && (
        <Parallax x={[-40, 140]} y={[0, 0]}>
          <img src={props.cloud} alt="cloud three" />
        </Parallax>
      )}
    </ParallaxWrapper>
  );
};

export default ParallaxComponent;
