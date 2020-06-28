import React from 'react';
import colors from 'styles/colors';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  margin-top: 5rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://www.linkedin.com/in/kahilnayton/"
        className="linked-in icon-size"
      ></a>
      <a
        href="https://www.youtube.com/watch?v=bCD669baBEI&feature=youtu.be"
        className="youtube icon-size"
      ></a>
    </FooterContainer>
  );
}
