import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

// import { useState } from 'react';

// import { Errors } from './Form.props';
// import { formData } from '../../constants/constants';

import Typography from '../../Typography';
import Button from '../Button/Button';
import { IFormLogin } from './Form.props';
import ErrorValidation from '../ErrorValidation/ErrorValidation';
import Input from '../Input/Input';
import { LabelInput } from '../LabelInput/Label';
import { schemaLoginPage } from '../../schema/schema';

function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLoginPage) });

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setValue('email', userData.email);
      setValue('password', userData.password);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<IFormLogin> = () => {
    navigate('/trafalgar/');
  };

  return (
    <>
      <Field onSubmit={handleSubmit(onSubmit)}>
        <LabelInput htmlFor="email">Email</LabelInput>
        <Input id="email" placeholder="Email" {...register('email')} />

        {<ErrorValidation>{errors.email?.message}</ErrorValidation>}

        <LabelInput htmlFor="password">Пароль</LabelInput>
        <Input id="password" type="password" placeholder="Password" {...register('password')} />

        {<ErrorValidation>{errors.password?.message}</ErrorValidation>}

        <LoginContainer variant="bodyS">
          <Checkbox id="rememberMe" />
          <Label htmlFor="rememberMe">Запомнить меня</Label>
          <ForgotPasswordLink to="/forgot-password">Забыли пароль?</ForgotPasswordLink>
        </LoginContainer>

        <Button type="submit">Вход</Button>
      </Field>
    </>
  );
}
export default Form;

const Field = styled.form`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const LoginContainer = styled(Typography)`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(2)} 0px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: auto;
`;

const ForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.Primary90};
  text-decoration: none;
`;
