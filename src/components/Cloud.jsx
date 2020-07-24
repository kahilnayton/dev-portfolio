import React from 'react';
import Fade from 'react-reveal/Fade';
import Cloud from '../vectors/cloud.svg';
import styled from '@emotion/styled';


const CloudContainer = styled.div`
border: solid;
margin-top: -2rem;

svg {
  height: 2rem;
}
`


export default Cloud = () => {
  return (
    <CloudContainer>
      <Cloud/>
    </CloudContainer>
  )
}
