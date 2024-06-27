import React from 'react';
import styled from 'styled-components';
import { ButtonLinkProps } from './ButtonLink.props';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Link)`
  flex: 1;
  border: 2px solid lightblue;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
`;

const GoogleLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const AppleLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const SignInButton: React.FC<ButtonLinkProps> = ({ provider, text, logo, link }) => (
  <StyledButton to={link}>
    {logo === 'google' && <GoogleLogo src="/google-icon.svg" alt="Google Logo" />}
    {logo === 'apple' && <AppleLogo src="/apple-icon.svg" alt="Apple Logo" />}
    {text}
  </StyledButton>
);

// Пример использования:
const ButtonLink: React.FC = () => {
  return (
    <StyledContainer>
      <SignInButton provider="google" text="Войти с помощью Google" logo="google" link="/error" />
      <SignInButton provider="apple" text="Войти с помощью Apple" logo="apple" link="/error" />
    </StyledContainer>
  );
};

export default ButtonLink;
