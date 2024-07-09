import React, { useState } from 'react';
import styled from 'styled-components';
import { CardPrice } from '../../components/CardPrice/Card';
import { items } from '../../constants/PriceConstant';

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

const MainContainerInfo = styled.div`
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
  top: -30px;
  ${({ theme }) => theme.typography.bodyXS}
`;

const TimeSwitch = styled.div`
  width: 149px;
  height: 25px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin: 0 auto;
  ${({ theme }) => theme.typography.bodyL}
`;

const TimeOption = styled.div`
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 32px;
  height: 16px;
  background: #458ff6;
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

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const SectionPrice = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

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
        <MainContainerInfo>
          <Discount>20% дешевле</Discount>
          <TimeSwitch>
            <TimeOption onClick={() => setChecked(false)}>Год</TimeOption>
            <Switch onClick={toggleSwitch}>
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
          <CardPrice
            title="Специалист"
            description="Для специалистов среднего уровня"
            oldPrice="$50"
            newPrice="$40"
            itemList={items.slice(0, 8)}
          />
          <CardPrice
            title="Эксперт"
            description="Для опытных специалистов"
            oldPrice="$70"
            newPrice="$60"
            itemList={items.slice(0, 12)}
          />
        </ContainerCard>
      </Container>
    </MainContainer>
  );
};

export default SectionPrice;
