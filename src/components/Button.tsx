import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  height?: string;
  width?: string;
  onClick?: () => void;
  customStyles?: ReturnType<typeof css>;
}

const Button: React.FC<ButtonProps> = ({ children, secondary, height, width, onClick, customStyles }) => {
  return (
    <StyledButton $secondary={secondary} $height={height} $width={width} onClick={onClick} $customStyles={customStyles}>
      {children}
    </StyledButton>
  );
};

export default Button;

const baseStyles = css`
  padding: 16px;
  ${({ theme }) => theme.typography.buttonL};
  cursor: pointer;
  border: 2px solid transparent;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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

const StyledButton = styled.button<{
  $secondary?: boolean;
  $height?: string;
  $width?: string;
  $customStyles?: ReturnType<typeof css>;
}>`
  ${baseStyles}

  ${(props) => (props.$secondary ? secondaryStyles : primaryStyles)}

  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  ${({ $customStyles }) => $customStyles}
`;
