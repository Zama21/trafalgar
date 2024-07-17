import React from 'react';
import styled from 'styled-components';

const AboutProject: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <AboutProjectContainer>
          <div>О проекте</div>
          <p>
            Наш проект создан группой врачей для популяризации современных медицинских знаний их доступности для всех,
            кто в этом заинтересован.
          </p>
        </AboutProjectContainer>
        <CardList>
          <Card>
            <StyledImg src="/src/assets/pillsPic.svg" alt="pils" />
            <CardMain>
              <div>Консультация</div>
              <p>На нашем форуме вы найдете ответы на вопросы</p>
            </CardMain>
            <CustomButton>
              Узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
          <Card>
            <StyledImg1 src="/src/assets/tableIcon.svg" alt="table" />
            <CardMain>
              <div>Тесты</div>
              <p>Вы можете пройти тесты на нашем сайте</p>
            </CardMain>
            <CustomButton>
              Узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
          <Card>
            <StyledImg2 src="/src/assets/medicalKitIcon.svg" alt="medicalKit" />
            <CardMain>
              <div>Консультация</div>
              <p>Мы поможем найти Вам ближайшую поликлинику</p>
            </CardMain>
            <CustomButton>
              Узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
        </CardList>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  @media (max-width: 1024px) {
    padding: 50px 0px 24px;
  }
  @media (max-width: 768px) {
    padding: 48px 16px 24px;
  }
  @media (max-width: 360px) {
    padding: 48px 16px 48px 16px;
  }
`;
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    max-width: 600px;
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 768px) {
    max-width: 600px;
    flex-direction: column;
    gap: 32px;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const AboutProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 360px) {
    max-width: 600px;
    gap: 16px;
  }
  div {
    ${({ theme }) => theme.typography.h2};
    @media (max-width: 3240px) {
      ${({ theme }) => theme.typography.h1}
    }
    @media (max-width: 1920px) {
      ${({ theme }) => theme.typography.h3}
    }

    @media (max-width: 1024px) {
      ${({ theme }) => theme.typography.h2}
    }
    @media (max-width: 768px) {
      ${({ theme }) => theme.typography.h2}
    }
  }
  p {
    ${({ theme }) => theme.typography.bodyL};
    @media (max-width: 360px) {
      ${({ theme }) => theme.typography.bodyM}
    }
    @media (max-width: 768px) {
      ${({ theme }) => theme.typography.bodyL}
    }
    @media (max-width: 1024px) {
    }
  }
`;

const CardList = styled.div`
  max-width: 816px;
  display: flex;
  flex-direction: row;
  @media (max-width: 360px) {
    flex-direction: column;
    gap: 32px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const CardMain = styled.div`
  padding: 24px 16px 16px 16px;
  div {
    ${({ theme }) => theme.typography.h5}
    margin-bottom: 16px;
  }
  p {
    ${({ theme }) => theme.typography.bodyL};
    @media (max-width: 360px) {
      ${({ theme }) => theme.typography.bodyM}
    }
  }
`;

const StyledImg = styled.img`
  margin-left: 16px;
  margin-right: 221.07px;
`;

const StyledImg1 = styled.img`
  margin-left: 16px;
  margin-right: 222px;
`;

const StyledImg2 = styled.img`
  margin-left: 16px;
  margin-right: 208.78px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: white;
  color: #1a73e8;
  ${({ theme }) => theme.typography.bodyM}
  margin-left: 16px;
  margin-right: 16px;
  cursor: pointer;
`;

export default AboutProject;
