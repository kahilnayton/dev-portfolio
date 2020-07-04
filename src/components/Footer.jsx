import React from 'react';
import gradients from 'styles/gradients';
import styled from '@emotion/styled';
import SocialBar from 'components/SocialBar';

const FooterContainer = styled.footer`
  background: ${gradients.rainbow};
  height: 5rem;
  display: grid;
  padding: 5rem;
  justify-content: start;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialBar />
    </FooterContainer>
  );
}
