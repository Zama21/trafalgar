import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  height?: string;
  width?: string;
  customStyles?: string;
}

const baseStyles = css`
  font-weight: ${({ theme }) => theme.typography.buttonL.fontWeight};
  padding: 16px;
  font-size: ${({ theme }) => theme.typography.buttonL.fontSize};
  cursor: pointer;
  border: 2px solid transparent;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 48px;
    font-size: ${({ theme }) => theme.typography.buttonM.fontSize};
  }

  @media (max-width: 360px) {
    height: 40px;
    font-size: ${({ theme }) => theme.typography.buttonS.fontSize};
    padding: 12px;
  }
`;

const primaryStyles = css`
  background-color: #458ff6;
  color: ${({ theme }) => theme.colors.White};
  border: none;
`;

const secondaryStyles = css`
  color: #458ff6;
  border: 2px solid #458ff6;
`;

const StyledButton = styled.button<{ $primary?: boolean; height?: string; width?: string; customStyles?: string }>`
  ${baseStyles}
  ${(props) => (props.$primary ? primaryStyles : secondaryStyles)}
    ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const Button: React.FC<ButtonProps> = ({ children, primary, height, width, customStyles }) => {
  return (
    <StyledButton $primary={primary} height={height} width={width} customStyles={customStyles}>
      {children}
    </StyledButton>
  );
};

export default Button;
