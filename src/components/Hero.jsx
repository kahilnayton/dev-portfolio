import React from 'react';
import RichText from '../components/RichText';
import styled from '@emotion/styled';
import dimensions from '../styles/dimensions';
import { Inner, Wrap } from '../styles/structure';
import { Rubric } from '../styles/typography';
import colors from 'styles/colors';
import CloudComponent from '../components/Cloud'

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 4rem;

  * {
    color: #fff;
  }

  & + * {
    margin-top: 5.6rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    & + * {
      margin-top: 8rem;
    }
  }
`;

const HeroInner = styled(Inner)`
  padding-top: 5.6rem;
  padding-bottom: 5.6rem;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    padding-top: 8.8rem;
    padding-bottom: 8.8rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${colors.blue};
      mix-blend-mode: multiply;
      transition: transform 0.12s ease-in-out;
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    width: calc(100% - 8rem);
    left: 4rem;
  }
`;

const HeroForeground = styled.div`
  position: absolute;
  width: 10vw;
  bottom: 0;
  left: 0;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 50%;
    height: 18rem;
    background-color: white;
    z-index: -10;
    max-width: 60rem;
  }

  img {
    z-index: 20;
    padding: 3rem 0 0 13rem;
    object-fit: cover;
  }
`;

const HeroWrap = styled(Wrap)`
  display: flex;
  align-items: flex-end;
  min-height: 55.5rem;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    min-height: 31.2rem;
    padding: 0 7.77vw;

    .Hero--homepage & {
      min-height: 58rem;
    }
  }

  @media (min-width: 1152px) {
    padding: 0 10.4rem;
    max-width: 128rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  background: ${colors.grey100};
  max-width: 85rem;
  text-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.18);
  padding: 1.6rem;

    &:hover {
    background: ${colors.blue};
    }

  p {
    margin-top: 3.2rem;
    color: ${colors.red};
    &:hover {
    color: #fff;
    }
  }
  h1 {
    color: ${colors.red};
    &:hover {
    color: #fff;
    }
  }

  span {
    > span {
      color: #fff;
    }

    & + * {
      margin-top: 0.8rem;
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    p {
      margin-top: 1.6rem;
    }
  }
`;

const Hero = ({
  heading,
  text,
  background,
  variant,
  foreground,
  content,
  rubric,
}) => {
  console.log(text);
  return (
    <HeroContainer className={`${variant ? `Hero--${variant}` : ''}`}>
      <HeroInner>
        {background && (
          <HeroBackground>
            <img src={background.url} alt={background.alt} />
          </HeroBackground>
        )}
        {foreground && (
          <HeroForeground>
            <img src={foreground.url} alt={foreground.alt} />
          </HeroForeground>
        )}
        <CloudComponent direction='right' distance='2rem'/>
        <HeroWrap>
          <HeroContent>
            {rubric && (
              <Rubric>
                <span>{rubric}</span>
              </Rubric>
            )}

            {heading && <RichText render={heading} />}

            {text && <p className="is-large">{text}</p>}
          </HeroContent>
        </HeroWrap>
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;
