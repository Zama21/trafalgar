import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button.tsx';

const Section1: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <SectionLeft>
          <SectionText>
            <Title>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</Title>
            <Text>
              Мы еще очень молоды, но достаточно амбициозны и планируем каждого случайного гостя нашего сайта превратить
              в его постоянного пользователя.
            </Text>
          </SectionText>
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
          <Img src="/src/assets/Pic1.png" alt="sectionPic1" />
        </SectionRight>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  @media (max-width: 3240px) {
    width: 100%;
  }

  @media (max-width: 1920px) {
    width: 100%;
  }

  @media (max-width: 1440px) {
    padding: 80px;
    max-width: 1440px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 48px 16px 64px 16px;
    width: 100%;
  }

  @media (max-width: 360px) {
    padding: 48px 16px 64px 16px;
    max-width: 393px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  max-width: 1440px;
  height: 681px;

  @media (max-width: 3240px) {
    max-width: 1440px;
  }

  @media (max-width: 1920px) {
    max-width: 1440px;
  }

  @media (max-width: 1440px) {
    max-width: 1440px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 768px) {
    max-width: 710px;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 360px) {
    max-width: 360px;
    flex-direction: column;
    gap: 32px;
  }
`;

const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionRight = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1440px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin: 32px 16px 64px;
  }

  @media (max-width: 360px) {
    margin: 32px 16px 64px;
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

  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.h1};
  }

  @media (max-width: 1024px) {
    ${({ theme }) => theme.typography.h3};
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.h4};
  }

  @media (max-width: 360px) {
    ${({ theme }) => theme.typography.h4};
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.bodyL};
  color: ${({ theme }) => theme.colors.coolGray90};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 3240px) {
    ${({ theme }) => theme.typography.customXXL};
  }

  @media (max-width: 1920px) {
    ${({ theme }) => theme.typography.customTextXL};
  }

  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.bodyL};
  }

  @media (max-width: 1024px) {
    ${({ theme }) => theme.typography.bodyM};
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.bodyM};
  }

  @media (max-width: 360px) {
    ${({ theme }) => theme.typography.bodyM};
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 505px;
  object-fit: contain;

  @media (max-width: 3240px) {
    max-width: 100%;
  }

  @media (max-width: 1920px) {
    max-width: 100%;
  }

  @media (max-width: 1440px) {
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
  }

  @media (max-width: 360px) {
    max-width: 100%;
  }
`;

const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 360px) {
    font-size: ${({ theme }) => theme.typography.bodyM};
    gap: 48px;
  }
`;

export default Section1;
