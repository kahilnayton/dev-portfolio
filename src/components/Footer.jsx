import React from 'react';
import gradients from 'styles/gradients';
import styled from '@emotion/styled';
import SocialBar from 'components/SocialBar';

const FooterWrapper = styled.div`
display: block;
width: 100%;
height: 100%;
`;

const FooterContainer = styled.footer`
display: flex;
margin: auto;
padding-left: 2.3rem;
height: 6rem;
align-items: center;
justify-content: flex-start;
background: ${gradients.rainbow};
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialBar />
      </FooterContainer>
    </FooterWrapper>
  );
}
