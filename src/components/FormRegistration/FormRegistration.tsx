import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../Input/Input';
import Button from '../Button/Button';
import ErrorValidation from '../ErrorValidation/ErrorValidation';
import { LabelInput } from '../LabelInput/Label';
import { IFormRegistration } from './FormRegistration.interface';
import { schema } from '../../schema/schema';

export function FormRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegistration>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormRegistration> = (data) => {
    // Добавление данных с полей в localStorage
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data);
  };
  return (
    <Field onSubmit={handleSubmit(onSubmit)}>
      <WrapperNameSurname>
        <WrapperOneInput>
          <LabelInput htmlFor="name">Имя</LabelInput>
          <Input id="name" placeholder="Имя" {...register('name')} />
          {<ErrorValidation>{errors.name?.message}</ErrorValidation>}
        </WrapperOneInput>

        <WrapperOneInput>
          <LabelInput htmlFor="surname">Фамилия</LabelInput>
          <Input id="surname" placeholder="Фамилия" {...register('surname')} />
          {<ErrorValidation>{errors.surname?.message}</ErrorValidation>}
        </WrapperOneInput>
      </WrapperNameSurname>

      <LabelInput htmlFor="email">Email</LabelInput>

      <Input id="email" placeholder="Email" {...register('email')} />
      {<ErrorValidation>{errors.email?.message}</ErrorValidation>}
      <LabelInput htmlFor="password">Пароль</LabelInput>
      <Input id="password" type="password" placeholder="Password" {...register('password')} />
      {<ErrorValidation>{errors.password?.message}</ErrorValidation>}

      <LoginContainer>
        <Checkbox id="agreeToTerms" {...register('agreeToTerms')} />
        <Label htmlFor="agreeToTerms">Согласен с политикой обработки персональных данных</Label>
      </LoginContainer>
      {<ErrorValidation>{errors.agreeToTerms?.message}</ErrorValidation>}

      <Button>Зарегестрироваться</Button>
    </Field>
  );
}

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
const Field = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
