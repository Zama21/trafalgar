import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import { BREAKPOINTS } from '../../constants';
import ArtiklePage from './ArticelPage.tsx';
import AboutProject from './AboutProject.tsx';

const Div = styled.div<{ $isSmallScreen: boolean }>`
  margin-top: ${(props) => (props.$isSmallScreen ? '80px' : '208px')};
`;

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });
  return (
    <Div $isSmallScreen={isSmallScreen}>
      {/*<QuestionBlock items={listQuestions} />*/}
      <ArtiklePage />
      {/*<Knowledge />*/}
      <AboutProject />
      {/*<RequestSection />*/}
      {/*<SectionsSponsors />*/}
      {/*<Footer />*/}
    </Div>
  );
};

export default Home;
