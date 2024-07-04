import { useState } from 'react';
import styled from 'styled-components';

import { QuestionBlockProps } from './QuestionsBlock.props';
import QuestionItem from './QuestionItem';
import Headling from '../Headling/Headling';

const QuestionBlock: React.FC<QuestionBlockProps> = ({ items }) => {
  // Стейт, который добавляет в массив id записей
  const [openIds, setOpenIds] = useState<number[]>([]);

  // Функция, она срабатывает когда мы кликнули по записи. Открылся ответ и его id попадает в стейт
  // Ну и если мы повторно кликнули, то он проверяет есть ли этот id в массиве, если есть, то убирает его
  const toggleQuestion = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <WrapperQuestionBlock>
      <TopLeftIcon src="/assets/sheet.svg" alt="Top Left Icon" />
      <BottomRightIcon src="/assets/sheet.svg" alt="Bottom Right Icon" />
      <Headling>Ответы частые на вопросы</Headling>
      <List>
        {items.map((item) => (
          <QuestionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            // Он проверяет массив на наличе id и возвращает булево
            isOpen={openIds.includes(item.id)}
            toggleQuestion={toggleQuestion}
          />
        ))}
      </List>
    </WrapperQuestionBlock>
  );
};

export default QuestionBlock;

const WrapperQuestionBlock = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8)};
  background: linear-gradient(180deg, rgb(103, 195, 243), rgb(90, 152, 242) 100%);
`;

const List = styled.ul`
  width: 100%;
  max-width: 900px;
`;

const TopLeftIcon = styled.img`
  position: absolute;
  top: 240px;
  left: 0px;
`;

const BottomRightIcon = styled.img`
  position: absolute;
  bottom: 90px;
  right: 0px;
`;
