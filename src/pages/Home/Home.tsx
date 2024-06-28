import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import styled from 'styled-components';

const H1 = styled.h1`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.Error};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  ${({ theme }) => theme.typography.h1}
`;

const Home: React.FC = () => {
  return (
    <div>
      <H1>Home Page</H1>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
