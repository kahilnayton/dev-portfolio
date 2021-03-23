import React, { createRef, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import lottie from 'lottie-web';
import styled from 'styled-components';

import { Inner } from '../styles/structure';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
import animation from '../public/animations/helicopter.json';
import Video from '../components/_ui/Video';

const BioContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  margin-bottom: 4rem;
  position: relative;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 1rem 1rem 1rem rgba(46, 54, 68, 0.03);

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    margin-bottom: 8rem;
  }

  img {
    position: absolute;
    /* filter: grayscale(1); */
    top: 0;
    right: 0;
    width: 12rem;
    height: auto;
    transform: translate(10px, -60px);
    overflow: hidden;
  }

  p {
    max-width: 50rem;
  }

  h1 {
    margin-bottom: 1rem;
    line-height: 1;
    display: inline-block;
    font-size: 3.6rem;
    background: linear-gradient(transparent 1.2rem, ${colors.lightPurple} 1rem);
  }
  em {
    font-family: 'Zallord';
  }
`;

const HelicopterAnimation = styled.div`
  height: 20rem;
  width: 20rem;
`;

const Bio = props => {
  // let animationContainer = createRef();
  const [showVideo, setShowVideo] = useState(false);
  // console.log(animationContainer)

  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: animation,
  //   });
  //   return () => anim.destroy();
  // }, []);

  // console.log(props);
  return (
    <Inner>
      <BioContainer>
        <h1>{props.heading[0].text}</h1>
        {showVideo && <Video source={props.video} />}
        {!showVideo && (
          <img src={props.profilePic.url} alt={props.profilePic.alt} onClick={() => setShowVideo(!showVideo)} />
        )}
        <RichText render={props.content} />
        {/* <HelicopterAnimation ref={animationContainer} /> */}
      </BioContainer>
    </Inner>
  );
};

export default Bio;
