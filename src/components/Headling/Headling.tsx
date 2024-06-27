import { HeadlingProps } from './Headling.props';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 24px;
  color: rgb(33, 39, 42);
  font-size: 42px;
  font-weight: 700;
  font-style: normal;
  line-height: 110%;
  text-align: left;
`;

function Headling({ children }: HeadlingProps) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Headling;
