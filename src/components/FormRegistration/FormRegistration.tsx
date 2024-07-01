import styled from 'styled-components';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Typography from '../../Typography';

export function FormRegistration() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Регистрация прошла успешно');
  };
  return (
    <Field onSubmit={handleSubmit}>
      <WrapperNameSurname>
        <WrapperOneInput>
          <Typography variant="bodyS">
            <LabelTag htmlFor="name">Имя</LabelTag>
          </Typography>
          <Input id="name" name="name" placeholder="Имя" />
        </WrapperOneInput>

        <WrapperOneInput>
          <Typography variant="bodyS">
            <LabelTag htmlFor="name">Фамилия</LabelTag>
          </Typography>
          <Input id="surname" name="surname" placeholder="Фамилия" />
        </WrapperOneInput>
      </WrapperNameSurname>

      <Typography variant="bodyS">
        <LabelTag htmlFor="email">Email</LabelTag>
      </Typography>

      <Input id="email" name="email" placeholder="Email" />

      <Typography variant="bodyS">
        <LabelTag htmlFor="password">Пароль</LabelTag>
      </Typography>
      <Input id="password" name="password" type="password" placeholder="Password" />

      <LoginContainer>
        <Checkbox id="rememberMe" />
        <Label htmlFor="rememberMe">Согласен с политикой обработки персональных данных</Label>
      </LoginContainer>

      <Button>Зарегестрироваться</Button>
    </Field>
  );
}

const LabelTag = styled.label`
  color: ${({ theme }) => theme.colors.coolGray90};
  text-align: left;
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
