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
      <FormRegistration></FormRegistration>
      <ButtonLink />
      <Hr />
      <Typography variant="bodyS">
        <LinkToRegistration to="/trafalgar/auth/login">Есть аккаунт?</LinkToRegistration>
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 560px;
  height: 100vh;
`;

const LinkToRegistration = styled(Link)`
  color: ${({ theme }) => theme.colors.Primary90};

  text-align: left;
  text-decoration: none;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};
  margin: ${({ theme }) => theme.spacing(6)} 0px;
`;

export default Register;
