import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

type ButtonProps = {
  children?: React.ReactNode
  onClick: () => null
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
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
