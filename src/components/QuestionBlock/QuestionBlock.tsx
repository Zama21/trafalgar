import styled from 'styled-components';

import { QuestionBlockProps } from './QuestionsBlock.props';
import QuestionItem from './QuestionItem';
import Typography from '../../Typography';

const QuestionBlock: React.FC<QuestionBlockProps> = ({ items }) => {
  return (
    <WrapperQuestionBlock>
      <TopLeftIcon src="/assets/sheet.svg" alt="Top Left Icon" />
      <BottomRightIcon src="/assets/sheet.svg" alt="Bottom Right Icon" />
      <TitleQuestion variant="h5">Вопросы</TitleQuestion>
      <QuestionHeadling variant="h2">Ответы на частые вопросы</QuestionHeadling>
      <List>
        {items.map((item) => (
          <QuestionItem key={item.id} id={item.id} question={item.question} answer={item.answer} />
        ))}
      </List>
    </WrapperQuestionBlock>
  );
};

export default QuestionBlock;

const WrapperQuestionBlock = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(10)};
  background: linear-gradient(180deg, rgb(103, 195, 243), rgb(90, 152, 242) 100%);

  @media screen and (max-width: 1200px) {
    > img {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    & {
      padding: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

const List = styled.ul`
  width: 100%;
  max-width: 900px;
  list-style-type: none;
  padding: 0 16px;
`;

const TopLeftIcon = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
`;

const BottomRightIcon = styled.img`
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

const QuestionHeadling = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  @media screen and (max-width: 600px) {
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const TitleQuestion = styled(Typography)`
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.Primary90};
`;
