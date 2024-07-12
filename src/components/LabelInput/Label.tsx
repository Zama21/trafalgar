import styled from 'styled-components';

import Typography from '../../Typography';
import { LabelInputProps } from './Label.props';

export function LabelInput({ children, htmlFor }: LabelInputProps) {
  return (
    <Typography variant="bodyS">
      <LabelTag htmlFor={htmlFor}>{children}</LabelTag>
    </Typography>
  );
}

const LabelTag = styled.label`
  color: ${({ theme }) => theme.colors.coolGray90};
  text-align: left;
`;
