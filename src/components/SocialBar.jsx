import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import gradients from 'styles/gradients';
import dimensions from 'styles/dimensions';

import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrMail,
  GrLinkedin,
} from 'react-icons/gr';

const SocialBarList = styled.ul`
  display: flex;
  justify-content: flex-end;

  li {
    display: inline-block;
    position: relative;
    top: 0.3rem;

    & + * {
      margin-left: 1.6rem;
    }
  }

  a {
    &:hover {
      svg {
        /* fill: ${colors.blue}; */
      }
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

const MailLink = styled.div`
  &:hover {
    cursor: pointer;
    svg {
      fill: ${colors.red};
    }
  }
`;

const SocialBar = props => {
  return (
    <SocialBarList>
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
        <MailLink to={'/contact'}>
          <GrMail />
        </MailLink>
      </li>
    </SocialBarList>
  );
};

export default SocialBar;
