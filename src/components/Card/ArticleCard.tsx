import styled from 'styled-components';
import React from 'react';

export const ArticleCard = ({ img, title, text }) => {
  return (
    <Card>
      <img src={img} alt="img" />
      <CardContent>
        <CartTitle>{title}</CartTitle>
        <CardText>{text}</CardText>
      </CardContent>
      <CustomButton>
        Подробнее
        <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
      </CustomButton>
    </Card>
  );
};

const Card = styled.div`
  max-width: 308px;
`;

const CardContent = styled.div`
  padding: 24px 16px 16px 16px;
  gap: 16px;
`;

const CartTitle = styled.h5`
  ${({ theme }) => theme.colors.coolGray90};
  ${({ theme }) => theme.typography.h5}
`;

const CardText = styled.div`
  font-size: ${({ theme }) => theme.typography.bodyM};
`;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  border: none;
  background-color: white;
  color: #1a73e8;
  ${({ theme }) => theme.typography.bodyL}
  margin-left: 16px;
  margin-right: 16px;
`;
