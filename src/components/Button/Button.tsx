import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.props';
import Typography from '../../Typography';

function Button({ children, kind, ...props }: ButtonProps) {
  return (
    <BntEntry kind={kind} {...props}>
      <Typography variant="buttonM">{children}</Typography>
    </BntEntry>
  );
}

export default Button;

const BntEntry = styled.button<{ kind?: 'doctor' | 'patient' }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.Primary60};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: white;

  margin-bottom: 48px;
  cursor: pointer;
  white-space: nowrap;

  ${({ kind }) =>
    kind === 'doctor' &&
    css`
      /* width: 200px;
      height: 60px; */
      background: ${({ theme }) => theme.colors.Primary60};
      border: 2px solid blue;
      @media (max-width: 850px) {
        color: red;
        margin-bottom: 32px;
      }
      @media (max-width: 460px) {
        padding: 15px 15px;
      }
    `}

  ${({ kind }) =>
    kind === 'patient' &&
    css`
      width: 200px;
      height: 60px;
      background: ${({ theme }) => theme.colors.White};
      border: 2px solid ${({ theme }) => theme.colors.Primary60};
      color: ${({ theme }) => theme.colors.Primary60};
      @media (max-width: 850px) {
        color: red;
        margin-bottom: 32px;
      }
      @media (max-width: 460px) {
        padding: 15px 15px;
      }
    `}
`;
