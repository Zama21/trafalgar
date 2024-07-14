import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Article } from '../../constants/ArtikleConstants..ts';

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ArticleCard: React.FC<Article> = ({ img, title, text }) => {
  return (
    <Card>
      {Array.isArray(img) ? (
        <AnimationContainer>
          <AnimationImg>
            {img.map((src, index) => (
              <AnimatedImage key={index} src={src} alt={`img${index + 1}`} index={index} />
            ))}
          </AnimationImg>
        </AnimationContainer>
      ) : (
        <img src={img} alt="img" />
      )}
      <CardContent>
        <CartTitle>{title}</CartTitle>
        <CardText>{text}</CardText>
      </CardContent>
      <CustomButton onClick={() => {}}>
        Подробнее
        <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
      </CustomButton>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};
  max-width: 308px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px 16px;
  gap: 16px;
`;

const CartTitle = styled.div`
  color: ${({ theme }) => theme.colors.coolGray90};
  font-size: ${({ theme }) => theme.typography.caption};
  font-weight: 700;
`;

const CardText = styled.div`
  font-size: ${({ theme }) => theme.typography.bodyM};
  max-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CustomButton = styled.button`
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: none;
  background-color: white;
  color: #1a73e8;
  font-size: ${({ theme }) => theme.typography.bodyL};

  &:active {
    color: #0d47a1;
  }
`;

const AnimationContainer = styled.div`
  background-image: url('/public/picture.png');
  display: flex;
  align-items: center;
  justify-content: center;
  width: 308px;
  height: 220px;
`;

const AnimationImg = styled.div`
  position: relative;
  width: 56px;
  height: 39px;
`;

const AnimatedImage = styled.img<{ index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 2s linear infinite;
  animation-delay: ${({ index }) => index * 0.1}s;
`;
