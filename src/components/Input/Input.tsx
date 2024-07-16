import { useState, forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <InputWrapper>
      <TagInput
        {...props}
        ref={ref}
        type={props.type === 'password' && passwordVisible ? 'text' : props.type}
        $error={props.error}
      />
      {props.type === 'password' && (
        <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
          {passwordVisible ? 'Скрыть' : 'Показать'}
        </TogglePasswordButton>
      )}
      {props.error && <ErrorValidation>{props.error}</ErrorValidation>}
    </InputWrapper>
  );
});
Input.displayName = 'Input';

export default Input;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TagInput = styled.input<{ $error?: string }>`
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
  width: 100%;

  ${({ $error }) =>
    $error &&
    `
    border-bottom-color: tomato;
  `}
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.Primary30};
  &:focus {
    outline: none;
  }
`;

const ErrorValidation = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: tomato;
  font-size: 12px;
  margin-top: 4px;
`;
