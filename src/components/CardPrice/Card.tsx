import React from 'react';
import styled from 'styled-components';
import Button from '../Button.tsx';
import { CardPriceProps } from '../../constants/PriceConstant.ts';

export const CardPrice: React.FC<CardPriceProps> = ({ title, description, oldPrice, newPrice, itemList }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardText $variant="bodyL">{description}</CardText>
    </CardHeader>
    <Price>
      <PriceOld>{oldPrice}</PriceOld>
      <PriceNew>{newPrice}</PriceNew>
      <p>{newPrice} USD каждый месяц</p>
    </Price>
    <Button width="135px" height="56px">
      Начать
    </Button>
    <ListContainer>
      {itemList &&
        itemList.map((item, index) => (
          <ListItem key={index}>
            <img src="/assets/check.svg" alt="check" />
            {item}
          </ListItem>
        ))}
    </ListContainer>
  </Card>
);

const Card = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 410px;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray20};
  border-radius: 8px;
  padding: 48px 24px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const CardHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CardTitle = styled.h3`
  ${({ theme }) => theme.typography.h3};
`;

const CardText = styled.p<{ $variant: string }>`
  ${({ theme }) => theme.typography.bodyL};
  @media (max-width: 360px) {
    ${({ theme }) => theme.typography.bodyM}
  }
`;

const Price = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    font-size: ${({ theme }) => theme.typography.bodyS};
  }
`;

const PriceOld = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.coolGray40};
  font-size: ${({ theme }) => theme.typography.h1};
`;

const PriceNew = styled.span`
  font-size: ${({ theme }) => theme.typography.h1};
`;

const ListContainer = styled.ul`
  ${({ theme }) => theme.typography.bodyL};
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  @media (max-width: 1920px) {
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.bodyL}
  }
`;
