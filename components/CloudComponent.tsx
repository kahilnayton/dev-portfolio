import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
// import Image from 'next/image'

import z from '../styles/base';

const CloudContainer = styled.div`
  overflow: hidden;
  svg {
    width: 10rem;
  }

  .Clouds-notFound {
    right: 10rem;
    padding-top: 30rem;
  }
  .Clouds-notFound--right {
    right: 10rem;
    padding-top: 66rem;
  }
  .Clouds-blog {
    right: 10rem;
    padding-left: 12rem;
  }
  .Clouds-project {
    right: 20rem;
    padding-left: 18rem;
    transform: translateY(-10rem);
  }
  .Clouds-about {
    top: 40rem;
    margin-top: -7rem;
  }
`;

const RightCloud = styled.div`
  display: block;
  position: absolute;
  right: 0rem;
  top: 0;
  margin-top: -4rem;
  z-index: ${z.modal};
`;

const LeftCloud = styled.div`
  z-index: ${z.modal};
  display: block;
  position: absolute;
  left: 5rem;
  margin-top: -28rem;
  top: 24rem;
  position: absolute;
`;

const CloudComponent = props => {
  return (
    <CloudContainer>
      {props.direction === 'left' && (
        <LeftCloud className={props.variant ? `Clouds-${props.variant}` : ''}>
          <Fade left distance={props.distance}>
            <img src='/cloudOne.svg' alt="cloud" width={50} height={50} />
          </Fade>
        </LeftCloud>
      )}
      {props.direction === 'right' && (
        <RightCloud
          className={props.variant ? `Clouds-${props.variant}--right` : ''}
        >
          <Fade right distance={props.distance}>
            <img src="/cloudOne.png" alt="cloud two" width={100} height={100} />
          </Fade>
        </RightCloud>
      )}
      {!props.direction && <img src="/cloudOne.png" alt="cloud two" width={100} height={100} />}
    </CloudContainer>
  );
};

export default CloudComponent;
