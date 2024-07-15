import styled, { css } from 'styled-components';

import Headling from '../Headling/Headling';
import Typography from '../../Typography';
import { KnowledgeIcons } from '../../constants/KnowledgeIcons';
import KnowledgeItem from '../KnowledgeItem/KnowledgeItem';
import Button from '../Button';

function Knowledge() {
  return (
    <PageKnowledge>
      <Titles>
        <TitleKnowledge variant="h5">Знания</TitleKnowledge>
        <Headling>
          Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе сайта,
          статьи разделены на категории.
        </Headling>
      </Titles>

      <ButtonWrapper>
        <Button height="56px" width="178px" customStyles={customDoctorStyles}>
          Для врачей
        </Button>
        <Button height="56px" width="213px" secondary customStyles={customPatientStyles}>
          Для пациентов
        </Button>
      </ButtonWrapper>
      <SecondContainer>
        <ContainerImg>
          <DashboardImage src="/assets/dashboardSection.svg" alt="" />
        </ContainerImg>

        <ContentContainer>
          {KnowledgeIcons.map((item) => (
            <KnowledgeItem key={item.id} link={item.link} number={item.number} text={item.text} />
          ))}
        </ContentContainer>
      </SecondContainer>
    </PageKnowledge>
  );
}

export default Knowledge;

const Titles = styled.div`
  margin: 80px 80px 0 80px;
  @media (max-width: 1200px) {
    margin: 48px 40px 0 40px;
  }
  @media (max-width: 850px) {
    margin: 48px 16px 0 16px;
  }
`;

const TitleKnowledge = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.Primary90};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const PageKnowledge = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 80px;
  margin-bottom: 48px;

  @media (max-width: 1200px) {
    margin: 0 40px 48px 40px;
  }

  @media (max-width: 850px) {
    margin: 0 16px 32px 16px;
  }
`;

const customDoctorStyles = css`
  @media (max-width: 560px) {
    ${({ theme }) => theme.typography.buttonS}
    height: 40px;
    width: 137px;
  }
`;

const customPatientStyles = css`
  @media (max-width: 560px) {
    ${({ theme }) => theme.typography.buttonS}
    height: 40px;
    width: 162px;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: baseline;
  margin: 0 80px 80px 80px;

  @media (max-width: 1200px) {
    margin: 0 40px 32px 40px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 24px;
    margin: 0 16px 32px 16px;
  }
`;

const ContainerImg = styled.div`
  flex: 1;
`;

const DashboardImage = styled.img`
  width: 100%;
  height: auto;
`;

const ContentContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  margin: auto 0 auto 80px;
  flex: 1;

  height: 184px;
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 1100px) {
    margin: auto 0 auto 40px;
  }

  @media (max-width: 950px) {
    margin: auto 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
