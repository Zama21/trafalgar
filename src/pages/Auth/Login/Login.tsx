import styled from 'styled-components';
import React from 'react';
import Headling from '../../../components/Headling/Headling';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import Form from '../../../components/Form/Form';

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 80px;

  @media (max-width: 600px) {
    border: 1px solid rebeccapurple;
    margin: 32px 16px;
  }
`;
const WrapperForm = styled.div``;

const LinkToRegistration = styled(Link)`
  color: rgb(0, 29, 108);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
  text-decoration: none;
`;

const Hr = styled.hr`
  border: 1px solid rgb(221, 225, 230);
  margin: 48px 0px;
  width: 100%;
  @media (max-width: 600px) {
    margin: 32px 0px;
  }
`;
