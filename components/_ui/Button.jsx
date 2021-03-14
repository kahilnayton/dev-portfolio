import React, { Component } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
// import gradients from '../../styles/gradients';


const ButtonContainer = styled("button")`
    position: relative;
    display: inline-block;
    padding: 1.6rem 3.33vw 1.4rem;
    background: ${colors.grey200};
    color: ${colors.grey900};
    font-size: 1.8rem;
    font-weight: 600;
    outline: none;
    border: none;
    transition: background 0.08s ease-in-out, color 0.12s ease-in-out;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background: ${colors.red};
      color: #fff;
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;

        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
            {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;
