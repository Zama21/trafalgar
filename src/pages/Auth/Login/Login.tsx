import styled from 'styled-components';
import React from 'react';
import Headling from '../../../components/Headling/Headling';
import Input from '../../../components/Input/Input';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const Wrapper = styled.div`
  width: 560px;
`;

const TagForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

const Label = styled.label`
  margin-right: auto;
`;

const ForgotPasswordLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;
const BntEntry = styled.button`
  padding: 16px 12px 16px 12px;
  align-items: center;
  width: 100%;
`;
const Login: React.FC = () => {
  return (
    <Wrapper>
      <Headling>Вход</Headling>
      <TagForm>
        <Field>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="Email"></Input>
        </Field>
        <Field>
          <label htmlFor="password">Пароль</label>
          <Input id="password" name="password" type="password" placeholder="Password"></Input>
        </Field>
      </TagForm>
      <LoginContainer>
        <Checkbox id="rememberMe" />
        <Label htmlFor="rememberMe">Запомнить меня</Label>
        <ForgotPasswordLink to="/forgot-password">Забыли пароль?</ForgotPasswordLink>
      </LoginContainer>
      <BntEntry>Вход</BntEntry>
      <ButtonLink />
    </Wrapper>
  );
};

export default Login;
