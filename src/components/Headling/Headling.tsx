import { HeadlingProps } from './Headling.props';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: rgb(33, 39, 42);
  font-family: Roboto;
  font-size: 42px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 48px;
`;

function Headling({ children }: HeadlingProps) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Headling;
