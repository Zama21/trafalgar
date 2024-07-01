import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
`;

const AboutProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;
  div {
    font-weight: 700;
    font-family: 'Roboto';
    font-size: 42px;
    line-height: 46.2px;
  }
  p {
    font-weight: 400;
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 25.2px;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

const CardMain = styled.div`
  div {
    margin-top: 24px;
    margin-left: 16px;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 22px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
    margin-left: 16px;
    margin-bottom: 16px;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 0px;
`;

const Section2: React.FC = () => {
  return (
    <MainContainer>
      <Container>
        <AboutProject>
          <div>О проекте</div>
          <p>
            Наш проект создан группой врачей для <br /> популяризации современных медицинских <br /> знаний их
            доступности для всех, кто в этом <br /> заинтересован.
          </p>
        </AboutProject>
        <CardList>
          <Card>
            <StyledImg src="/src/assets/pillsPic.svg" alt="pils" />
            <CardMain>
              <div>Консультация</div>
              <p>
                На нашем форуме вы <br /> найдете ответы на вопросы
              </p>
            </CardMain>
            <CustomButton>
              узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
          <Card>
            <StyledImg1 src="/src/assets/tableIcon.svg" alt="table" />
            <CardMain>
              <div>Консультация</div>
              <p>
                Вы можете пройти тесты на <br /> нашем сайте
              </p>
            </CardMain>
            <CustomButton>
              узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
          <Card>
            <StyledImg2 src="/src/assets/medicalKitIcon.svg" alt="medicalKit" />
            <CardMain>
              <div>Консультация</div>
              <p>
                Мы поможем найти Вам <br /> ближайшую поликлинику
              </p>
            </CardMain>
            <CustomButton>
              узнать больше
              <img src="/src/assets/arrow-right.svg" alt="arrow-right" />
            </CustomButton>
          </Card>
        </CardList>
      </Container>
    </MainContainer>
  );
};

export default Section2;
