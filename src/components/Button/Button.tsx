import styled from 'styled-components';

import { ButtonProps } from './Button.props';
import { theme } from '../../theme';
import Typography from '../../Typography';

const BntEntry = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 261px;
  background: ${({ theme }) => theme.colors.Primary60};
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: white;
  width: 100%;

  margin-bottom: 48px;
  cursor: pointer;
`;
function Button({ children, ...props }: ButtonProps) {
  return (
    <BntEntry {...props}>
      <Typography variant="buttonM">{children}</Typography>
    </BntEntry>
  );
}

export default Button;
