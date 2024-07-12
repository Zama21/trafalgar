import React from 'react';
import Section2 from './Section2';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import { listQuestions } from '../../constants/Questions';
import { BREAKPOINTS } from '../../constants';
import SectionsSponsors from './SectionSponsors';
import Footer from './Footer';

const Div = styled.div<{ $isSmallScreen: boolean }>`
  margin-top: ${(props) => (props.$isSmallScreen ? '80px' : '208px')};
`;

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });
  return (
    <>
      <Div $isSmallScreen={isSmallScreen}>
        <QuestionBlock items={listQuestions} />
        {/* <Section2 /> */}
        <SectionsSponsors />
        <Footer />
      </Div>
    </>
  );
};

export default Home;
