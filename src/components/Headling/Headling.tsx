import styled from 'styled-components';

import { HeadlingProps } from './Headling.props';
import Typography from '../../Typography';

function Headling({ children }: HeadlingProps) {
  return <StyledHeading variant="h2">{children}</StyledHeading>;
}

export default Headling;

const StyledHeading = styled(Typography)`
  color: ${({ theme }) => theme.colors.coolGray90};
  font-family: ${({ theme }) => theme.fonts.primary};

  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: 1200px) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
  @media (max-width: 850px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0%;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    font-weight: 700;
  }
`;
