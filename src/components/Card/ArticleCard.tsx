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
        <CardImageContainer>
          <CardImage src={img} alt="img" />
        </CardImageContainer>
      )}
      <CardContent>
        <CardTitle>{title}</CardTitle>
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
  width: 100%;
  max-width: 308px;
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 360px;
  }

  @media (min-width: 3840px) {
    max-width: 480px;
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  @media (min-width: 1920px) {
    height: 280px;
  }

  @media (min-width: 3840px) {
    height: 400px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.typography.h5};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.bodyM};
    font-weight: 700;
  }

  @media (min-width: 1920px) {
    font-size: ${({ theme }) => theme.typography.h3};
  }

  @media (min-width: 3840px) {
    font-size: ${({ theme }) => theme.typography.h1};
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px 16px;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (min-width: 1920px) {
    padding: 32px 24px 24px 24px;
  }

  @media (min-width: 3840px) {
    padding: 48px 32px 32px 32px;
  }
`;

const CardText = styled.div`
  font-size: ${({ theme }) => theme.typography.bodyM};
  color: ${({ theme }) => theme.colors.coolGray90};
  max-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.typography.bodyS};
  }

  @media (min-width: 1920px) {
    font-size: ${({ theme }) => theme.typography.bodyL};
  }
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

  @media (max-width: 360px) {
    ${({ theme }) => theme.typography.buttonS};
  }

  @media (min-width: 1920px) {
    font-size: ${({ theme }) => theme.typography.h4};
  }

  @media (min-width: 3840px) {
    font-size: ${({ theme }) => theme.typography.h3};
  }

  &:active {
    color: #0d47a1;
  }
`;

const AnimationContainer = styled.div`
  background-image: url('/assets/AritcleAnimation/picture.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;

  @media (min-width: 1920px) {
    height: 280px;
  }

  @media (min-width: 3840px) {
    height: 400px;
  }
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
