import styled from 'styled-components';

import { KnowledgeItemProps } from '../../constants/KnowledgeIcons';
import Typography from '../../Typography';

function KnowledgeItem({ link, number, text }: KnowledgeItemProps) {
  return (
    <ContainerItem>
      <IconImg src={link} alt="" />
      <ContainerText>
        <Typography variant="h4">{number}</Typography>
        <Typography variant="bodyS">{text}</Typography>
      </ContainerText>
    </ContainerItem>
  );
}

export default KnowledgeItem;

const ContainerItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border: 1px solid green;
  padding: 16px;
  height: auto;
  width: 100%;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};
  @media (max-width: 1400px) {
    padding: 5px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    padding: 16px 8px;
  }
`;

const IconImg = styled.img`
  max-width: 48px;
  max-height: 48px;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 224px;

  @media (min-width: 1400px) {
    width: 224px;
  }
  @media (max-width: 550px) {
    text-align: center;
  }
`;
