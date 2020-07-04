import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

import { GrFacebookOption, GrInstagram, GrTwitter, GrMail, GrLinkedin } from "react-icons/gr";


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
        fill: ${colors.blue};
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

const SocialBar = props => {

  return (
    <SocialBarList>
      <li>
        <a
          href={'https://www.facebook.com/kahil.nayton'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrFacebookOption />
        </a>
      </li>

      <li>
        <a
          href={'https://www.instagram.com/kahilnayton/'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </a>
      </li>

      <li>
        <a
          href={'https://twitter.com/kahilnayton'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrTwitter />
        </a>
      </li>
      <li>
        <a
          href={'https://www.linkedin.com/in/kahilnayton/'}
          target="blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin />
        </a>
      </li>
      <li>
        <Link
          to={'/contact'}
        >

          <GrMail />
        </Link>
      </li>
    </SocialBarList>
  );
};

export default SocialBar;
