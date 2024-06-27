import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button.tsx';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  background-color: #f2f4f8;
  max-width: 1440px;
  height: 681px;
`;

const SectionLeft = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionRight = styled.section`
  margin-top: 88px;
  margin-right: 94.77px;
  margin-bottom: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 59.4px;
  font-family: 'Roboto';
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 25.2px;
  color: #21272a;
  margin-bottom: 64px;
  width: 600px;
  font-family: 'Roboto';
  font-weight: 400;
`;

const Img = styled.img`
  width: 585.23px;
  height: 505px;
`;

const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Section1: React.FC = () => {
  return (
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
  );
};

export default Section1;
