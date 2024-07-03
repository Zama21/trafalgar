import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ButtonLinkProps } from './ButtonLink.props';
import Typography from '../../Typography';

const SignInButton: React.FC<ButtonLinkProps> = ({ provider, text, logo, link }) => (
  <StyledButton to={link}>
    {logo === 'google' && <GoogleLogo src="/assets/google-icon.svg" alt="Google Logo" />}
    {logo === 'apple' && <AppleLogo src="/assets/apple-icon.svg" alt="Apple Logo" />}
    {text}
  </StyledButton>
);

const ButtonLink: React.FC = () => {
  return (
    <Typography variant="subtitleS">
      <StyledContainer>
        <SignInButton provider="google" text="Войти с помощью Google" logo="google" link="/error" />
        <SignInButton provider="apple" text="Войти с помощью Apple" logo="apple" link="/error" />
      </StyledContainer>
    </Typography>
  );
};

export default ButtonLink;
const StyledContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Link)`
  flex: 1;
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Primary60};
`;

const GoogleLogo = styled.img`
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
`;

const AppleLogo = styled.img`
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
`;
