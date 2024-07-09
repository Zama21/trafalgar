import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import styled from 'styled-components';
import Typography from '../../Typography';
import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import { listQuestions } from '../../constants/Questions';
import Knowledge from '../../components/Knowledge/Knowledge';

const CustomTypography = styled(Typography)`
  color: blue;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.Error};
`;

const Home: React.FC = () => {
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
  );
};

export default Home;
