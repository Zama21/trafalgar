import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';

import { Errors } from './Form.props';
import { formData } from '../../constants/constants';

const Field = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const LabelTag = styled.label`
  color: rgb(33, 39, 42);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 28px;
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: auto;
`;

const ForgotPasswordLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

function Form() {
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });
  const navigate = useNavigate();

  // Обновление значений в formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in formData) {
      formData[name as keyof typeof formData] = value;
    }
  };

  const validate = () => {
    const newErrors: Errors = { email: '', password: '' };
    if (!formData.email) {
      newErrors.email = 'Поле Email должно быть заполнено';
    }
    if (!formData.password) {
      newErrors.password = 'Поле Пароль должно быть заполнено';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const logIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formProps = Object.fromEntries(new FormData(e.target as HTMLFormElement)) as {
      [key: string]: FormDataEntryValue;
    };
    formData.email = formProps.email as string;
    formData.password = formProps.password as string;
    if (validate()) {
      console.log(formData);
      navigate('/trafalgar/');
    }
  };

  return (
    <>
      <Field onSubmit={logIn}>
        <LabelTag htmlFor="email">Email</LabelTag>
        <Input id="email" name="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <LabelTag htmlFor="password">Пароль</LabelTag>
        <Input id="password" name="password" type="password" placeholder="Password" onChange={handleChange} />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}

        <LoginContainer>
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
