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
  font-weight: 500;
  height: 56px;
  padding: 16px;
  font-size: 20px;
  cursor: pointer;
  border: 2px solid transparent;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.5px;
`;

const primaryStyles = css`
  background-color: #458ff6;
  color: white;
  border: none;
`;

const secondaryStyles = css`
  color: #458ff6;
  border: 2px solid #458ff6;
`;

const StyledButton = styled.button<ButtonProps>`
  ${baseStyles}
  ${(props) => (props.primary ? primaryStyles : secondaryStyles)}
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
    <StyledButton primary={primary} height={height} width={width} customStyles={customStyles}>
      {children}
    </StyledButton>
  );
};

export default Button;
