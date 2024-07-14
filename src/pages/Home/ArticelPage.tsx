import React from 'react';
import styled from 'styled-components';
import { ArticleCard } from '../../components/Card/ArticleCard';
import { articles } from '../../constants/ArtikleConstants.';
import Button from '../../components/Button.tsx';

const ArticlePage = () => {
  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleHeader>
          <ArticleTitle>Статьи</ArticleTitle>
          <ArticleSubtitle>
            Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в медицине
          </ArticleSubtitle>
        </ArticleHeader>
        <ArticleCardList>
          {articles.map((el, index) => (
            <ArticleCard key={index} img={el.img} title={el.title} text={el.text} />
          ))}
        </ArticleCardList>
        <Button primary="primary" width="171px" height="56px">
          Все статьи
        </Button>
      </ArticleContent>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  width: 100%;
  padding: 80px;
  background-color: ${({ theme }) => theme.colors.White};

  @media (max-width: 768px) {
    padding: 48px 16px;
  }

  @media (min-width: 1920px) {
    padding: 120px 48px;
  }

  @media (min-width: 3840px) {
    padding: 160px 64px;
  }
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1920px) {
    gap: 96px;
  }

  @media (min-width: 3840px) {
    gap: 128px;
  }
`;

const ArticleHeader = styled.div`
  max-width: 1280px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const ArticleTitle = styled.h1`
  ${({ theme }) => theme.typography.caption}
  color: #001D6C;
  @media (min-width: 3840px) {
    font-size: ${({ theme }) => theme.typography.h1};
  }
`;

const ArticleSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.coolGray70};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h4};
  }

  @media (min-width: 3840px) {
    font-size: ${({ theme }) => theme.typography.h2};
  }
`;

const ArticleCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  justify-content: center;

  @media (max-width: 1339px) {
    justify-content: space-around;
  }

  @media (max-width: 1339px) {
    & > div {
      flex: 1 1 calc(50% - 16px);
      max-width: calc(50% - 16px);
    }
  }

  @media (max-width: 768px) {
    & > div {
      flex: 1 1 calc(50% - 16px);
      max-width: calc(50% - 16px);
    }
  }

  @media (min-width: 1920px) {
    gap: 32px;
    & > div {
      flex: 1 1 calc(25% - 32px);
      max-width: calc(25% - 32px);
    }
  }

  @media (min-width: 3840px) {
    gap: 48px;
    & > div {
      flex: 1 1 calc(20% - 48px);
      max-width: calc(20% - 48px);
    }
  }
`;

export default ArticlePage;
