import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  customBtnStyled?: ReturnType<typeof css>;
  customTextContainerStyled?: ReturnType<typeof css>;
}

const ButtonStyled = styled.button<{ $customBtnStyled?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  height: 48px;
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

  ${({ $customBtnStyled }) => $customBtnStyled}
`;

const TextContainerStyled = styled.span<{ $customTextContainerStyled?: ReturnType<typeof css> }>`
  padding: 0px 16px 0px 16px;

  @media (max-width: 900px) {
    padding: 0px 8px 0px 8px;
  }

  ${({ $customTextContainerStyled }) => $customTextContainerStyled}
`;

export const Button: React.FC<ButtonProps> = ({ onClick, customBtnStyled, customTextContainerStyled, children }) => {
  return (
    <ButtonStyled $customBtnStyled={customBtnStyled} onClick={onClick}>
      <TextContainerStyled $customTextContainerStyled={customTextContainerStyled}> {children}</TextContainerStyled>
    </ButtonStyled>
  );
};
