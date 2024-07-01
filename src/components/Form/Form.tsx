import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Typography from '../../Typography';

import Button from '../Button/Button';
import { Errors } from './Form.props';
import { formData } from '../../constants/constants';
import Input from '../Input/Input';

const Field = styled.form`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const LabelTag = styled.label`
  color: ${({ theme }) => theme.colors.coolGray90};
  text-align: left;
`;

const LoginContainer = styled.div`
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

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.Error};

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <Field onSubmit={handleSubmit}>
        <Typography variant="bodyS">
          <LabelTag htmlFor="email">Email</LabelTag>
        </Typography>
        <Input id="email" name="email" placeholder="Email" onChange={handleChange} />

        {errors.email && (
          <Typography variant="bodyS">
            <ErrorText>{errors.email}</ErrorText>
          </Typography>
        )}

        <Typography variant="bodyS">
          <LabelTag htmlFor="password">Пароль</LabelTag>
        </Typography>
        <Input id="password" name="password" type="password" placeholder="Password" onChange={handleChange} />

        {errors.password && (
          <Typography variant="bodyS">
            <ErrorText>{errors.password}</ErrorText>
          </Typography>
        )}

        <Typography variant="bodyS">
          <LoginContainer>
            <Checkbox id="rememberMe" />
            <Label htmlFor="rememberMe">Запомнить меня</Label>
            <ForgotPasswordLink to="/forgot-password">Забыли пароль?</ForgotPasswordLink>
          </LoginContainer>
        </Typography>

        <Button type="submit">Вход</Button>
      </Field>
    </>
  );
}

export default Form;
