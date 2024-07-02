import { ElementType, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { TypographyCustom } from './theme';

type Variant = keyof TypographyCustom;

const getTagForVariant = (variant: Variant): ElementType => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    default:
      return 'p';
  }
};

const TypographyStl = styled.p<{ $variant: Variant }>`
  ${({ theme, $variant }) => theme.typography[$variant]}
`;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: ElementType;
}

export default function Typography({ variant = 'bodyL', as, children, ...props }: TypographyProps) {
  const Component = as || getTagForVariant(variant);

  return (
    <TypographyStl as={Component} {...props} $variant={variant}>
      {children}
    </TypographyStl>
  );
}
