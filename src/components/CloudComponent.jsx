import React from 'react';
import Fade from 'react-reveal/Fade';
import CloudOne from '../vectors/cloudOne.svg';
import CloudTwo from '../vectors/cloudTwo.svg';
import styled from '@emotion/styled';

const CloudContainer = styled.div`
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
  right: 10rem;
  padding-left: 26rem;
}
.Clouds-about {
  top: 40rem;
}
`;

const RightCloud = styled.div`
  display: block;
  position: absolute;
  right: 0rem;
  top: 0;
  margin-top: -4rem;
`;

const LeftCloud = styled.div`
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
            <CloudOne />
          </Fade>
        </LeftCloud>
      )}
      {props.direction === 'right' && (
        <RightCloud className={props.variant ? `Clouds-${props.variant}--right` : ''}>
          <Fade right distance={props.distance}>
            <CloudTwo />
          </Fade>
        </RightCloud>
      )}
      {!props.direction && (
          <CloudTwo />
      )}
    </CloudContainer>
  );
};

export default CloudComponent;
