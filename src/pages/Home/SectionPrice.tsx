import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  max-width: 100vw;
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 auto;
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 48px;
`;

const HeaderOne = styled.div`
  ${({ theme }) => theme.typography.captionOther}
`;

const HeaderTwo = styled.div`
  ${({ theme }) => theme.typography.h2}
`;

const HeaderText = styled.div`
  ${({ theme }) => theme.typography.bodyL}
`;
const SectionPrice = () => {
  return (
    <MainContainer>
      <Container>
        <ContainerHeader>
          <HeaderInfo>
            <div>
              <HeaderOne>цены</HeaderOne>
              <HeaderTwo>Лучший источник медицинской информации</HeaderTwo>
            </div>
            <HeaderText>
              Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов
              в сфере здравоохранения и охраны здоровья
            </HeaderText>
          </HeaderInfo>
        </ContainerHeader>
        <TimeSwitch></TimeSwitch>
      </Container>
    </MainContainer>
  );
};

export default SectionPrice;
