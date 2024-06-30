import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

const H1 = styled.h1`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.Error};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
`;

const Div = styled.div<{ $isSmallScreen: boolean }>`
  height: 1500px;
  margin-top: ${(props) => (props.$isSmallScreen ? '80px' : '208px')};
`;

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 835px)' });
  return (
    <Div $isSmallScreen={isSmallScreen}>
      <H1>Home Page</H1>
      <Section1 />
      <Section2 />
      <Section3 />
    </Div>
  );
};

export default Home;
