import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button.tsx';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <SectionLeft>
          <SectionLeftText>
            <Title>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</Title>
            <Text>
              Мы еще очень молоды, но достаточно амбициозны и планируем каждого случайного гостя нашего сайта превратить
              в его постоянного пользователя.
            </Text>
          </SectionLeftText>
          <SectionButton>
            <Button primary width="216px" height="56px">
              Войти как врач
            </Button>
            <Button width="172px" height="56px">
              Подробнее
            </Button>
          </SectionButton>
        </SectionLeft>
        <SectionRight>
          <img src="/src/assets/Pic1.png" alt="sectionPic1" />
        </SectionRight>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  @media (max-width: 1440px) {
    max-width: 1440px;
  }
  @media (max-width: 1024px) {
    align-items: center;
    padding: 48px 80px 24px;
  }
  @media (max-width: 768px) {
    padding: 48px 16px 64px 16px;
    max-width: 100%;
  }
  @media (max-width: 360px) {
    gap: 32px;
    max-width: 393px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  max-width: 1440px;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 600px;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 360px) {
    max-width: 100%;
    flex-direction: column;
    gap: 32px;
  }
`;

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0px 80px 0px;
  max-width: 100%;
`;

const SectionRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  max-height: 500px;
  width: 100%;
  height: auto;
  @media (max-width: 1024px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 400px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 3240px) {
    ${({ theme }) => theme.typography.h1};
  }

  @media (max-width: 1920px) {
    ${({ theme }) => theme.typography.h1};
  }
  @media (max-width: 1339px) {
    ${({ theme }) => theme.typography.h3};
  }
  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.h4};
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.bodyL};
  color: ${({ theme }) => theme.colors.coolGray90};
  margin-bottom: 80px;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 3240px) {
    ${({ theme }) => theme.typography.customXXL};
  }
  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.bodyM};
  }

  @media (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodyL};
    margin-bottom: 48px;
  }
`;

const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SectionLeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1440px) {
    gap: 48px;
  }
  @media (max-width: 1024px) {
    gap: 48px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.typography.bodyM};
    gap: 24px;
  }
`;

export default Main;
