import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// import {colors, randomColors} from '../../styles/colors';
// import gradients from '../../styles/gradients';
// import dimensions from '../../styles/dimensions';
import { Logo } from '../../components/_ui/icons';

const ButtonContainer = styled.a`
  svg {
    transform: translateY(3px);
    fill: #fff;
  }
`;

export default function LogoLink() {
  return (
    <Link href="/">
      <ButtonContainer>
        <Logo width={200} height={100} />
      </ButtonContainer>
    </Link>
  );
}
