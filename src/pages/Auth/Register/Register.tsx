import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Headling from '../../../components/Headling/Headling';
import { FormRegistration } from '../../../components/FormRegistration/FormRegistration';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import Typography from '../../../Typography';

const Register: React.FC = () => {
  return (
    <Wrapper>
      <Headling>Регистрация</Headling>
      <FormRegistration />
      <ButtonLink />
      <Hr />
      <Typography variant="bodyS">
        <LinkToRegistration to="/trafalgar/auth/login">Есть аккаунт?</LinkToRegistration>
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 80px;

  @media (max-width: 600px) {
    /* border: 1px solid rebeccapurple; */
    margin: 32px 16px;
  }
`;

const LinkToRegistration = styled(Link)`
  color: ${({ theme }) => theme.colors.Primary90};
  text-align: left;
  text-decoration: none;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};
  margin: ${({ theme }) => theme.spacing(6)} 0px;
  width: 100%;
  @media (max-width: 600px) {
    margin: 32px 0px;
  }
`;

export default Register;
