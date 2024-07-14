import React, { useState } from 'react';
import styled from 'styled-components';
import { items } from '../../constants/PriceConstant';
import { CardPrice } from '../../components/CardPrice/Card';

const SectionPrice = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked((prev) => !prev);
  };

  return (
    <MainContainer>
      <Container>
        <ContainerHeader>
          <HeaderInfo>
            <div>
              <HeaderOne>ЦЕНЫ</HeaderOne>
              <HeaderTwo>Лучший источник медицинской информации</HeaderTwo>
            </div>
            <HeaderText>
              Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов
              в сфере здравоохранени я и охраны здоровья
            </HeaderText>
          </HeaderInfo>
        </ContainerHeader>
        <MainContainerInfo>
          <TimeSwitch>
            <Discount>20% дешевле</Discount>
            <TimeOption onClick={() => setChecked(false)}>Год</TimeOption>
            <Switch checked={checked} onClick={toggleSwitch}>
              <SwitchToggle checked={checked} />
            </Switch>
            <TimeOption onClick={() => setChecked(true)}>Месяц</TimeOption>
          </TimeSwitch>
        </MainContainerInfo>
        <ContainerCard>
          <CardPrice
            title="Стажер"
            description="Для начинающих специалистов"
            oldPrice="$35"
            newPrice="$25"
            itemList={items.slice(0, 5)}
          />
          <CardWrapper>
            <PopularText>Популярный</PopularText>
            <CardPrice
              title="Специалист"
              description="Для уверенных специалистов"
              oldPrice="$50"
              newPrice="$40"
              itemList={items.slice(0, 8)}
            />
          </CardWrapper>
          <CardPrice
            title="Эксперт"
            description="Для шерстяных волчар"
            oldPrice="$70"
            newPrice="$60"
            itemList={items.slice(0, 12)}
          />
        </ContainerCard>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  max-width: 100vw;
`;

const Container = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 48px 16px;
    gap: 32px;
  }
`;

const ContainerHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 48px;
  @media (max-width: 1024px) {
    gap: 24px;
  }
`;

const HeaderOne = styled.h1`
  ${({ theme }) => theme.typography.captionOther}
  color: #001d6c;
`;

const HeaderTwo = styled.h2`
  ${({ theme }) => theme.typography.h2};
  @media (max-width: 1024px) {
    ${({ theme }) => theme.typography.h4}
  }
`;

const HeaderText = styled.p`
  display: flex;
  text-align: center;
  @media (max-width: 3240px) {
    font-size: 22px;
  }
  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.bodyL};
  }
`;

const MainContainerInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Discount = styled.div`
  background: #f0f0f0;
  text-align: center;
  border-radius: 12px;
  width: 96px;
  height: 20px;
  padding: 4px 8px;
  position: absolute;
  top: -15px;
  transform: translate(-50%);
  ${({ theme }) => theme.typography.bodyXS}
`;

const TimeSwitch = styled.div`
  position: relative;
  width: 149px;
  height: 25px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin: 0 auto;
  ${({ theme }) => theme.typography.bodyL}
`;

const TimeOption = styled.span`
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 32px;
  height: 16px;
  background: ${(props) => (props.checked ? '#b0b0b0' : '#458ff6')};
  border-radius: 33px;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SwitchToggle = styled.div`
  transition: 300ms all;
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 35px;
  top: 50%;
  left: ${(props) => (props.checked ? '16px' : '4px')};
  background: white;
  transform: translate(0, -50%);
`;

const ContainerCard = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 1920px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    gap: 8px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const PopularText = styled.div`
  position: absolute;
  top: -10px;
  background: #f2f4f8;
  padding: 4px 8px;
  border-radius: 12px;
  ${({ theme }) => theme.typography.bodyXS}
`;

export default SectionPrice;
