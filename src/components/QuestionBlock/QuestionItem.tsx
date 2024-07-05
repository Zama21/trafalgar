import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Typography from '../../Typography';

export interface QuestionItemProps {
  id: number;
  question: string;
  answer: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ id, question, answer }) => {
  // Стейт, который добавляет в массив id записей
  const [openIds, setOpenIds] = useState<number[]>([]);
  // Когда ответ будет открыт, сюда будет записана высота тега с ответом
  const [height, setHeight] = useState('');
  // Тут хранится доступ к тегу с ответом
  const answerRef = useRef<HTMLDivElement>(null);

  // Функция, она срабатывает когда мы кликнули по записи. Открылся ответ и его id попадает в стейт
  // Ну и если мы повторно кликнули, то он проверяет есть ли этот id в массиве, если есть, то убирает его
  const toggleQuestion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const isOpen = openIds.includes(id);

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
          <AnswerWrapper>
            <Typography variant="bodyM">{answer}</Typography>
          </AnswerWrapper>
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
  display: flex;
  transition: transform 0.3s ease;
  transform: ${({ 'data-isopen': isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0)')};
`;

const AnswerDiv = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
`;

const AnswerWrapper = styled.div`
  padding-top: 25px;
`;
