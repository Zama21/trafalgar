import { InputProps } from './Input.props';
import styled from 'styled-components';

const TagInput = styled.input`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  border: 1px solid #c5c2c2;
  background: #fff;
  box-shadow: 15px 20px 45px 0px rgba(233, 233, 233, 0.25);
  border-radius: 10px;
  padding: 20px;
`;

function Input({ ...props }: InputProps) {
  return <TagInput {...props} />;
}
export default Input;
