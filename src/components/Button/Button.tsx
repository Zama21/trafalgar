import { ButtonProps } from './Button.props';
import styled from 'styled-components';

const BntEntry = styled.button`
  padding: 16px 261px;
  background: rgb(69, 143, 246);
  box-sizing: border-box;
  border: 2px solid rgb(69, 143, 246);
  color: white;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.5px;
  width: 100%;

  margin-bottom: 48px;
  cursor: pointer;
`;
function Button({ children, ...props }: ButtonProps) {
  return <BntEntry {...props}>{children}</BntEntry>;
}

export default Button;
