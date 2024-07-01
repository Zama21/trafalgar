import styled from 'styled-components';
import { forwardRef } from 'react';

import { InputProps } from './Input.props';

const TagInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.coolGray60};

  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray30};
  box-shadow: 15px 20px 45px 0px rgba(233, 233, 233, 0.25);

  padding: ${({ theme }) => theme.spacing(2, 2)};
  margin: ${({ theme }) => theme.spacing(1)} 0px;

  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.coolGray10};
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <TagInput {...props} ref={ref} />;
});

export default Input;
