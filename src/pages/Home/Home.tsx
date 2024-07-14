import React from 'react';
import Section2 from './Section2';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import { listQuestions } from '../../constants/Questions';

import Knowledge from '../../components/Knowledge/Knowledge';

import { BREAKPOINTS } from '../../constants';

import RequestSection from './RequestSection/RequestSection';

import SectionsSponsors from './SectionSponsors';
import Footer from './Footer';
import ReviewPage from './ReviewPage';

const Div = styled.div<{ $isSmallScreen: boolean }>`
  margin-top: ${(props) => (props.$isSmallScreen ? '80px' : '208px')};
`;

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });
  return (
    <Div $isSmallScreen={isSmallScreen}>
      <QuestionBlock items={listQuestions} />
      <Knowledge />
      <Section2 />
      <RequestSection />
      <ReviewPage />
      <SectionsSponsors />
      <Footer />
    </Div>
  );
};

export default Home;
