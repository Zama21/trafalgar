import React from 'react';
import styled from 'styled-components';
import {ArticleCard} from "../../components/Card/ArticleCard";
import {articles} from "../../constants/ArtikleConstants.";

const ArticlePage = () => {
    return (
        <ArticleContainer>
            <ArticleHeader>
                    <ArticleTitle>Статьи</ArticleTitle>
                <ArticleSubtitle>
                    Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в
                    медицине
                </ArticleSubtitle>
            </ArticleHeader>
            <ArticleCardList>
                {articles.map((el, index) => (
                    <ArticleCard key={index} img={el.img} title={el.title} text={el.text} />
                ))}
            </ArticleCardList>
        </ArticleContainer>
    );
};

const ArticleContainer = styled.div`
  width: 100vw;
  background-color: ${({theme}) => theme.colors.White}
`;

const ArticleHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ArticleTitle = styled.h1`
  ${({theme}) => theme.typography.h2}
  color: #001D6C;
`;

const ArticleSubtitle = styled.div`
  ${({theme}) => theme.typography.h2};
  color: ${({theme}) => theme.colors.coolGray70};
`;

const ArticleCardList = styled.div`
  gap: 16px;
`

export default ArticlePage;
