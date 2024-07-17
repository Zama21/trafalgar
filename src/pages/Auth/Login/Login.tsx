import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Headling from '../../../components/Headling/Headling';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import Form from '../../../components/Form/Form';
import Typography from '../../../Typography';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Headling>Вход</Headling>
      <Form />
      <ButtonLink />
      <Hr />
      <Typography variant="bodyS">
        <LinkToRegistration to="/trafalgar/auth/register">Нет аккаута? Зарегестрироваться</LinkToRegistration>
      </Typography>
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
    margin: 32px 16px;
  }
`;

const LinkToRegistration = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.Primary90};
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
