
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';

import z from '../styles/base';
import { slightRock } from '../styles/animations';
// import CloudOne from '../vectors/cloudOne.svg';

const ParallaxWrapper = styled.div`
  overflow: hidden;
  z-index: ${z.modal};
  img {
    width: auto;
    height: 8rem;
    /* transform: translateY(20px); */
  }

  .parallax-outer {
    height: 14rem;
  }
`;

const ParallaxPlane = styled.img`
  height: 12rem;
  animation-name: ${slightRock};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const ParallaxComponent = props => {
  return (
    <ParallaxWrapper>
      {props.direction === 'right' && (
        <Parallax x={[-40, 140]} y={[0, 0]}>
          <ParallaxPlane style={{height: '14rem'}} src={props.plane || undefined} alt="Plane" />
        </Parallax>
      )}
      {props.direction === 'left' && (
        <Parallax x={[140, -50]} y={[10, 50]}>
          <ParallaxPlane src={props.planeRight} alt="cloud two" />
        </Parallax>
      )}
      {props.variant === 'cloud' && (
        <Parallax x={[-40, 140]} y={[0, 0]}>
          <ParallaxPlane src={props.cloud} alt="cloud three" />
        </Parallax>
      )}
    </ParallaxWrapper>
  );
};

export default ParallaxComponent;
