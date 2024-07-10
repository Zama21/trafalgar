import { ReactNode, ButtonHTMLAttributes } from 'react';
import { css } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customStyles?: ReturnType<typeof css>;
}
