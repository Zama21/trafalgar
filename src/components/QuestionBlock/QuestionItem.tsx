import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Typography from '../../Typography';

export interface QuestionItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggleQuestion: (id: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ id, question, answer, isOpen, toggleQuestion }) => {
  // Когда ответ будет открыт, сюда будет записана высота тега с ответом
  const [height, setHeight] = useState('');
  // Тут хранится доступ к тегу с ответом
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // ${answerRef.current?.scrollHeight - так мы получаем значение высоты для тега с ответом
      setHeight(`${answerRef.current?.scrollHeight}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen]);

  return (
    <ListItem>
      <QuestionButton onClick={() => toggleQuestion(id)}>
        <Wrapper>
          {question}
          <IconWrapper data-isopen={isOpen}>
            <img src={isOpen ? '/assets/minus.svg' : '/assets/plus.svg'} alt="" />
          </IconWrapper>
        </Wrapper>
        <AnswerDiv ref={answerRef} style={{ height }} data-isopen={isOpen}>
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div<{ 'data-isopen': boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ 'data-isopen': isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0)')};
`;

const AnswerDiv = styled.div<{ 'data-isopen': boolean }>`
  overflow: hidden;
  transition: height 0.3s ease;
  ${({ 'data-isopen': isOpen }) =>
    isOpen &&
    css`
      padding-top: ${({ theme }) => theme.spacing(3)};
    `}
`;
