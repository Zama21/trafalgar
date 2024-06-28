import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button.tsx';

const MainContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.coolGray10};
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  max-width: 1440px;
  height: 681px;
`;

const SectionLeft = styled.section`
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionRight = styled.section`
  margin-top: ${({ theme }) => theme.spacing(11)};
  margin-right: ${({ theme }) => theme.spacing(11.85)};
  margin-bottom: ${({ theme }) => theme.spacing(11)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.bodyL};
  color: ${({ theme }) => theme.colors.coolGray90};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Img = styled.img`
  width: 585.23px;
  height: 505px;
`;

const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const Section1: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <SectionLeft>
          <SectionText>
            <Title>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</Title>
            <Text>
              Мы еще очень молоды, но достаточно амбициозны и планируем <br /> каждого случайного гостя нашего сайта
              превратить в его
              <br /> постоянного пользователя.
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

export default Section1;
