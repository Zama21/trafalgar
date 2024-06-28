import { InputProps } from './Input.props';
import styled from 'styled-components';

const TagInput = styled.input`
  color: rgb(105, 112, 119);

  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;

  border: 1px solid #c5c2c2;
  box-shadow: 15px 20px 45px 0px rgba(233, 233, 233, 0.25);

  padding: 13px 16px;
  padding: 12px 16px 12px 16px;
  margin: 8px 0px;

  box-sizing: border-box;
  border-bottom: 1px solid rgb(193, 199, 205);
  background: rgb(242, 244, 248);
`;

function Input({ ...props }: InputProps) {
  return <TagInput {...props} />;
}
export default Input;
