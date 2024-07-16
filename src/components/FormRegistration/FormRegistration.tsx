import styled, { css } from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import { LabelInput } from '../LabelInput/Label';
import { IFormRegistration } from './FormRegistration.interface';
import { schema } from '../../schema/schema';
import Button from '../Button';

export function FormRegistration() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegistration>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormRegistration> = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    navigate('/trafalgar/auth/login');
  };

  return (
    <Field onSubmit={handleSubmit(onSubmit)}>
      <WrapperNameSurname>
        <WrapperOneInput>
          <LabelInput htmlFor="name">Имя</LabelInput>
          <Input id="name" placeholder="Имя" {...register('name')} error={errors.name?.message} />
        </WrapperOneInput>

        <WrapperOneInput>
          <LabelInput htmlFor="surname">Фамилия</LabelInput>
          <Input id="surname" placeholder="Фамилия" {...register('surname')} error={errors.surname?.message} />
        </WrapperOneInput>
      </WrapperNameSurname>

      <LabelInput htmlFor="email">Email</LabelInput>
      <Input id="email" placeholder="Email" {...register('email')} error={errors.email?.message} />

      <LabelInput htmlFor="password">Пароль</LabelInput>
      <PasswordWrapper>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password')}
          error={errors.password?.message}
        />
      </PasswordWrapper>

      <LoginContainer>
        <Checkbox id="agreeToTerms" {...register('agreeToTerms')} />
        <Label htmlFor="agreeToTerms">Согласен с политикой обработки персональных данных</Label>
      </LoginContainer>
      {errors.agreeToTerms && <ErrorText>{errors.agreeToTerms.message}</ErrorText>}

      <Button height="48px" customStyles={BtnStl}>
        Зарегистрироваться
      </Button>
    </Field>
  );
}

const Field = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const WrapperNameSurname = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;
const WrapperOneInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
  flex-basis: 0;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)} 0px;
`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;
const Label = styled.label`
  margin-right: auto;
`;

const BtnStl = css`
  ${({ theme }) => theme.typography.buttonM}
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ErrorText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: tomato;
  font-size: 12px;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;
