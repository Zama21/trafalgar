import { FormProps } from 'react-router-dom';
import styled from 'styled-components';

const Field = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function Form({ children }: FormProps) {
  return <Field>{children}</Field>;
}

export default Form;
