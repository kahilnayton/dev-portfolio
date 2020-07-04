import React, { Component } from 'react';
import styled from '@emotion/styled';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Inner } from 'styles/structure';
import colors from 'styles/colors';
import gradients from 'styles/gradients';
import dimensions from 'styles/dimensions';
// import CleanInput from 'components/_ui/CleanInput';
// import GenericLink from 'components/_ui/GenericLink';
import SocialBar from 'components/SocialBar';
import { document } from 'browser-monads';

const headerHeightMobile = '6.4rem';
const headerHeightDesktop = '10.4rem';

const HeaderContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  & + * {
    margin-top: ${headerHeightMobile};
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    & + * {
      margin-top: ${headerHeightDesktop};
    }
  }
`;

const HeaderBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: ${headerHeightMobile};
  padding: 2.2rem 0 2rem;
  background: ${gradients.rainbowToRight};
  transition: box-shadow 0.12s ease-in-out;
  z-index: 10;

  .is-sticky &,
  .is-open & {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.06);
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    height: ${headerHeightDesktop};
    padding-top: 4rem;
    box-shadow: none;
  }
`;

const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    h4 {
      color: ${colors.grey100};
    }
  }
`;

const HeaderLinks = styled.div`
  display: none;

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: flex;
    padding: 2rem;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: flex-end;
  }
  a {
    color: ${colors.red500};
  }
`;

const HeaderHamburger = styled.input`
  display: block;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-72%);
  height: 2.3rem;
  cursor: pointer;

  > span {
    display: block;
    position: relative;
    width: 2.4rem;
    height: 0.2rem;
    background-color: ${colors.grey100};
    transition: all 0.4s ease;
    transform-origin: center center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: inherit;
      transition: all 0.4s ease;
    }

    &::before {
      top: -0.6rem;
    }

    &::after {
      top: 0.6rem;
    }
  }

  .is-open & {
    span {
      transform: rotate(135deg);

      &::before,
      &::after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    right: 3.5rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: none;
  }
`;

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: ${headerHeightMobile};
  width: 100%;
  height: calc(100vh - ${headerHeightMobile});
  opacity: 0;
  visibility: hidden;
  background-color: ${colors.grey100};
  user-select: none;

  .is-open & {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  a {
    font-size: 1.6rem;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const MobileToggle = styled.div`
  position: relative;
  padding: 2.4rem 0 2rem;
  transition: background 0.08s ease-in-out;
  cursor: pointer;

  svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    fill: ${colors.red500};
    display: block;
    width: 2rem;
    height: 1.3rem;
    transform-origin: center center;
    transition: transform 0.08s ease-in-out;
  }

  a {
    font-weight: 400;
  }

  .is-open > & {
    background-color: ${colors.grey100};

    a {
      color: #fff;
      fill: ${colors.red500};
    }
  }
`;

const MobileContent = styled(Inner)`
  display: flex;
  flex-direction: column;

  .is-open > & {
    display: block;
  }

  li {
    & + * {
      margin-top: 1.6rem;
    }
  }

  a {
    font-size: 2.1rem;
    font-weight: 600;
    margin: 1rem 0;
    color: ${colors.grey800};

    &:hover {
      color: ${colors.red500};
    }
  }
`;

const MobileFooter = styled.footer`
  width: 100%;
  height: 8.8rem;
  padding-top: 4rem;
  flex: 0 0 8.8rem;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSticky: false,
      isOpen: false,
    };
  }

  // detects clicks outside header content
  handleClick = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      isOpen: false,
    });
  };

  toggleMobile = () => {
    const bodyClasses = document.getElementsByTagName('body')[0].classList;

    bodyClasses.toggle('is-locked');

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  render() {
    const self = this;

    return (
      <HeaderContainer
        className={`${this.state.isOpen ? 'is-open' : ''} ${
          this.state.isSticky ? 'is-sticky' : ''
        }`}
        ref={node => (this.node = node)}
      >
        <HeaderBar>
          <HeaderInner>
            <Link to="/">
              <h4>Kahil Nayton</h4>
            </Link>

            <HeaderLinks>
              <SocialBar />
            </HeaderLinks>

            <HeaderHamburger
              as="button"
              type="button"
              onClick={() => {
                this.toggleMobile();
              }}
            >
              <span></span>
            </HeaderHamburger>
          </HeaderInner>
        </HeaderBar>

        <HeaderMobile>
          <MobileLinks>
            <MobileToggle>
              <MobileContent>
                <SocialBar />
              </MobileContent>
            </MobileToggle>
          </MobileLinks>
        </HeaderMobile>
      </HeaderContainer>
    );
  }
}
