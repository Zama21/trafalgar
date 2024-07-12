import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';
import Typography from '../../../Typography';

interface FormControlProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
  placeholder?: string;
  type?: string;
  InputComponent?: any;
  inputStyle?: ReturnType<typeof css>;
}

const FormControl: React.FC<FormControlProps> = ({
  label,
  id,
  register,
  errors,
  placeholder,
  type = 'text',
  InputComponent = type === 'textarea' ? Textarea : Input,
  inputStyle,
}) => {
  const inputProps = {
    id,
    ...register,
    placeholder,
    $error: !!errors,
    $style: inputStyle,
  };

  if (type !== 'textarea') {
    (inputProps as React.InputHTMLAttributes<HTMLInputElement>).type = type;
  }

  return (
    <FormGroup>
      <Typography variant="bodyS" as="label" htmlFor={id}>
        {label}
      </Typography>
      <InputComponent {...inputProps} />
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </FormGroup>
  );
};

export default FormControl;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const SharedStyles = css<{ $error?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray30};
  background-color: ${({ theme }) => theme.colors.coolGray10};
  border-color: ${({ $error, theme }) => ($error ? theme.colors.Error : '')};
  padding: 12px 16px;
  ${({ theme }) => theme.typography.bodyM}
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Primary60};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.Primary60};
  }
`;

const Input = styled.input<{ $error?: boolean; $style?: ReturnType<typeof css> }>`
  height: 48px;
  width: 100%;
  ${SharedStyles}
  ${({ $style }) => $style}
`;

const Textarea = styled.textarea<{ $error?: boolean; $style?: ReturnType<typeof css> }>`
  min-height: 96px;
  border: none;
  ${SharedStyles}
  ${({ $style }) => $style}
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.Error};
  ${({ theme }) => theme.typography.bodyS}
  margin-top: 5px;
`;
