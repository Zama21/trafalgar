import styled from 'styled-components';

import { HeadlingProps } from './Headling.props';
import Typography from '../../Typography';

function Headling({ children }: HeadlingProps) {
  return (
    <Typography variant="h2">
      <StyledHeading>{children}</StyledHeading>
    </Typography>
  );
}

export default Headling;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.coolGray90};
  font-family: ${({ theme }) => theme.fonts.primary};

  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
