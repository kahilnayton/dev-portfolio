/* eslint-disable jsx-a11y/media-has-caption */

import React, { Component } from 'react';
import styled from 'styled-components';
import dimensions from "styles/dimensions";
import Fade from "react-reveal/Fade";
import { document } from 'browser-monads';

const IllustrationContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  
  &.Illustration--hero {
    display: none;
  }
  
  @media(min-width: ${dimensions.tabletLandscapeUp}px) {
    &.Illustration--hero {
      display: block;
    }
  }
`;

const IllustrationContent = styled.div`
  video {
    display: block;
    width: 100%;
    height: auto;
  }
`;

class Illustration extends Component {
  componentDidMount() {
    const video = document.createElement('video');
    video.autoplay = true;
    video.autoPlay = true;
    video.loop = false;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('playsinline', 'true'); // fixes autoplay in webkit (ie. mobile safari)
    video.setAttribute('muted', 'true'); // fixes autoplay in webkit (ie. mobile safari)
    video.setAttribute('poster', this.props.poster && this.props.poster.url);

    const source = document.createElement('source');
    source.src = this.props.source.url;
    source.type = 'video/mp4';
    video.appendChild(source);

    this.contentNode.appendChild(video);
  }

  render() {
    return (
      <IllustrationContainer className={this.props.variant ? `Illustration--${this.props.variant}` : ''}>
        <Fade>
          <IllustrationContent ref={node => this.contentNode = node} />
        </Fade>
      </IllustrationContainer>
    );
  }
}

export default Illustration;
