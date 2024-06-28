import styled from 'styled-components';
import React from 'react';
import Headling from '../../../components/Headling/Headling';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import Form from '../../../components/Form/Form';

const Wrapper = styled.div`
  width: 560px;
  height: 100vh;
`;

const LinkToRegistration = styled(Link)`
  color: rgb(0, 29, 108);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
  text-decoration: none;
`;

// const LabelTag = styled.label`
//   color: rgb(33, 39, 42);
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 140%;
//   letter-spacing: 0%;
//   text-align: left;
// `;

const Hr = styled.hr`
  border: 1px solid rgb(221, 225, 230);
  margin: 48px 0px;
`;

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Headling>Вход</Headling>
      <Form />
      <ButtonLink />
      <Hr />
      <LinkToRegistration to="/trafalgar/auth/register">Нет аккаута? Зарегестрироваться</LinkToRegistration>
    </Wrapper>
  );
};

export default Login;
