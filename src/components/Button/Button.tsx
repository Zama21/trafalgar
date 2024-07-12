import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.props';
import Typography from '../../Typography';

function Button({ children, customStyles, ...props }: ButtonProps) {
  return (
    <BntEntry $customStyles={customStyles} {...props}>
      <Typography variant="buttonM">{children}</Typography>
    </BntEntry>
  );
}

export default Button;

const BntEntry = styled.button<{ $customStyles?: ReturnType<typeof css> }>`
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
  white-space: nowrap;
  ${({ $customStyles }) => $customStyles}

  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: white;
  margin-bottom: 48px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;
