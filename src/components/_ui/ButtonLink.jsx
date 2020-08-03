import React, { Component } from 'react';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import gradients from '../../styles/gradients';
import { Link } from 'gatsby';

const ButtonContainer = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1.6rem 3.33vw 1.4rem;
  background: ${colors.yellow500};
  color: ${colors.grey900};
  font-size: 1.8rem;
  font-weight: 600;
  outline: none;
  border: none;
  transition: background 0.08s ease-in-out, color 0.12s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${gradients.rainbow};
    color: #fff;
  }
`;

class ButtonLink extends Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <ButtonContainer to={this.props.to} {...props}>
        {this.props.children}
      </ButtonContainer>
    );
  }
}

export default ButtonLink;
