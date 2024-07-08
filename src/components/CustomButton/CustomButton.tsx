import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 105px;
  border: 2px solid;
  border-color: #458ff6;
  background-color: #458ff6;
  padding: 16px 12px 16px 12px;
  ${({ theme }) => theme.typography.buttonM}
  color: ${({ theme }) => theme.colors.White};
  white-space: nowrap;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    opacity: 0.9;
  }
`;
