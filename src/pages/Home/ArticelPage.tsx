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
        <Button $primary="primary " width="171px" height="56px">
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
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  max-width: 1280px;
  margin: 0 auto;
`;

const ArticleHeader = styled.div`
  max-width: 1280px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ArticleTitle = styled.h1`
  ${({ theme }) => theme.typography.h2}
  color: #001D6C;
`;

const ArticleSubtitle = styled.div`
  ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.coolGray70};
`;

const ArticleCardList = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export default ArticlePage;
