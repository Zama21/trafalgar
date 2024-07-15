import { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../Typography';

export interface QuestionItemProps {
  id: number;
  question: string;
  answer: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ListItem>
      <QuestionButton onClick={toggleQuestion}>
        <Wrapper>
          {question}
          <IconWrapper data-isopen={isOpen}>
            <img src={isOpen ? '/assets/minus.svg' : '/assets/plus.svg'} alt="" />
          </IconWrapper>
        </Wrapper>
        <AnswerDiv data-isopen={isOpen}>
          <Typography variant="bodyM">{answer}</Typography>
        </AnswerDiv>
      </QuestionButton>
    </ListItem>
  );
};

export default QuestionItem;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const QuestionButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 20px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 0%;
  background: ${({ theme }) => theme.colors.White};
  padding: 17px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: none;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div<{ 'data-isopen': boolean }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${({ 'data-isopen': isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0)')};
`;

const AnswerDiv = styled.div<{ 'data-isopen': boolean }>`
  overflow: hidden;
  height: ${({ 'data-isopen': isOpen }) => (isOpen ? 'auto' : '0')};
  opacity: ${({ 'data-isopen': isOpen }) => (isOpen ? '1' : '0')};
  padding: ${({ 'data-isopen': isOpen }) => (isOpen ? '25px 0 0 0' : '0')};
  transition:
    height 0.4s ease-in-out,
    opacity 0.4s ease-in-out,
    padding 0.4s ease-in-out;
`;
