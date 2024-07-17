import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>;
  error?: string;
}
