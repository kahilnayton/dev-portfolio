import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';
// import gradients from 'styles/gradients';
import Link from 'next/link';

import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrMail,
  GrLinkedin,
} from 'react-icons/gr';
// import { checkPropTypes } from 'prop-types';

const SocialBarList = styled.ul`
  display: flex;

  li {
    display: inline-block;
    position: relative;
    top: 0.3rem;

    & + * {
      margin-left: 1.6rem;
    }
  }

  svg {
    display: block;
    height: 1.8rem;
    width: 1.8rem;
    fill: ${colors.grey200};
    transition: fill 0.12s ease-in-out;
  }

  @media (min-width: ${dimensions.tabletLandscapeUp}px) {
    li {
      & + * {
        margin-left: 2.4rem;
      }
    }
  }

  &.burger {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;
    position: relative;
    justify-content: space-evenly;
    right: 0;
    height: 24rem;

    svg {
      height: 3rem;
      width: 3rem;
      fill: ${colors.grey600};
    }
  }
`;

const FaceBookIcon = styled.a`
  &:hover {
    svg {
      fill: #129df8;
    }
  }
`;
const InstaIcon = styled.a`
  &:hover {
    svg {
      fill: #f95901;
    }
  }
`;
const TwitterIcon = styled.a`
  &:hover {
    svg {
      fill: #50abf1;
    }
  }
`;
const LinkedInIcon = styled.a`
  &:hover {
    svg {
      fill: #017ab9;
    }
  }
`;

const MailLink = styled(Link)`
  &:hover {
    cursor: pointer;
    svg {
      fill: ${colors.red};
    }
  }
`;

const SocialBar = props => {
  return (
    <SocialBarList className={`${props.variant && props.variant}`}>
      <li>
        <FaceBookIcon
          href={'https://www.facebook.com/kahil.nayton'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrFacebookOption />
        </FaceBookIcon>
      </li>

      <li>
        <InstaIcon
          href={'https://www.instagram.com/kahilnayton/'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </InstaIcon>
      </li>

      <li>
        <TwitterIcon
          href={'https://twitter.com/kahilnayton'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrTwitter />
        </TwitterIcon>
      </li>
      <li>
        <LinkedInIcon
          href={'https://www.linkedin.com/in/kahilnayton/'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin />
        </LinkedInIcon>
      </li>
      <li>
        <MailLink href={'/contact'} onClick={props.toggleMobile}>
          <a>
            <GrMail />
          </a>
        </MailLink>
      </li>
    </SocialBarList>
  );
};

export default SocialBar;
