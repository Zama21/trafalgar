import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import styled from 'styled-components';

import Typography from '../../Typography';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import { listQuestions } from '../../constants/Questions';
import Knowledge from '../../components/Knowledge/Knowledge';


import { useMediaQuery } from 'bbbchut_test1_bbbchut13';
import { BREAKPOINTS } from '../../constants';

const Div = styled.div<{ $isSmallScreen: boolean }>`
  height: 1500px;
  margin-top: ${(props) => (props.$isSmallScreen ? '80px' : '208px')};
`;

const Home: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });
  return (

    <>
      <Typography variant="h1">tag h1</Typography>
      <Typography variant="h1" as="span">
        tag span
      </Typography>
      <Typography variant="bodyM">tag p</Typography>
      <CustomTypography variant="h2">tag h2</CustomTypography>

      {/* <QuestionBlock items={listQuestions} /> */}
      {/* <Section1 /> */}
      <Knowledge />
      <Section2 />
      <Section3 />
    </>

    <Div $isSmallScreen={isSmallScreen}>
      <Section1 />
      <Section2 />
      <Section3 />
    </Div>

  );
};

export default Home;
