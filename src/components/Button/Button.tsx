import styled from 'styled-components';

import { ButtonProps } from './Button.props';
import Typography from '../../Typography';

function Button({ children, ...props }: ButtonProps) {
  return (
    <BntEntry {...props}>
      <Typography variant="buttonM">{children}</Typography>
    </BntEntry>
  );
}

export default Button;

const BntEntry = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.Primary60};
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: white;
  margin-bottom: 48px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;
