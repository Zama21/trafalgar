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
        <Button width="171px" height="56px">
          Все статьи
        </Button>
      </ArticleContent>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  width: 100%;
  padding: 80px;
  background-color: ${({ theme }) => theme.colors.White};
  @media (min-width: 1920px) {
    padding: 120px 48px;
  }
  @media (max-width: 768px) {
    padding: 48px 16px;
  }
`;

const ArticleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 64px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 3840px) {
    gap: 128px;
  }
  @media (min-width: 1920px) {
    gap: 96px;
  }
  @media (max-width: 768px) {
    gap: 32px;
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
`;

const ArticleSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.coolGray70};
  @media (min-width: 3840px) {
    font-size: ${({ theme }) => theme.typography.h2};
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h4};
  }
`;

const ArticleCardList = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1920px) {
  }
  @media (max-width: 1339px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export default ArticlePage;
