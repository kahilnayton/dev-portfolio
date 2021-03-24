import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import z from '../styles/base';
import { slightRock } from '../styles/animations';
import { PlaneRight, Cloud, PlaneTwo } from '../components/_ui/icons';
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

  svg {
    height: 12rem;
    animation-name: ${slightRock};
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

const ParallaxComponent = props => {
  return (
    <ParallaxWrapper>
      {props.variant === 'planeLeftToRight' && (
        <Parallax x={[-40, 140]} y={[0, 0]}>
          <PlaneTwo />
        </Parallax>
      )}
      {props.variant === 'planeRightToLeft' && (
        <Parallax x={[140, -50]} y={[10, 50]}>
          <PlaneRight height={300} width={700} />
        </Parallax>
      )}
      {props.variant === 'cloudLeftToRight' && (
        <Parallax x={[-40, 140]} y={[0, 0]}>
          <Cloud height={100} width={700} />
        </Parallax>
      )}
    </ParallaxWrapper>
  );
};

export default ParallaxComponent;
