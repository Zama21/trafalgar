import styled from "styled-components";
import React from "react";

export const ArticleCard = ({img, title, text}) => {
    return (
        <Card>
            <imt src={img} alt="img"/>
            <CardContent>
                <CartTitle>{title}</CartTitle>
                <CardText>{text}</CardText>
            </CardContent>
            <CustomButton>
                Узнать больше
                <img src="/src/assets/arrow-right.svg" alt="arrow-right"/>
            </CustomButton>
        </Card>

    )
}

const Card = styled.div`
  max-width: 308px`

const CardContent = styled.div`
  padding: 24px 16px 16px 16px;
  gap: 16px`

const CartTitle = styled.h5`
  ${({theme}) => theme.colors.coolGray90}
`

const CardText = styled.div`
  ${({theme}) => theme.typography.h5}
`

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: white;
  color: #1a73e8;
  ${({theme}) => theme.typography.bodyM}
  margin-left: 16px;
  margin-right: 16px;
`;