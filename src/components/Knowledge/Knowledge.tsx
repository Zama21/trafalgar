import styled from 'styled-components';
import { css } from 'styled-components';

import Headling from '../Headling/Headling';
import Button from '../../components/Button/Button';
import Typography from '../../Typography';
import { KnowledgeIcons } from '../../constants/KnowledgeIcons';
import KnowledgeItem from '../KnowledgeItem/KnowledgeItem';

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
        <Button customStyles={customDoctorStyles}>Для врачей</Button>
        <Button customStyles={customPatientStyles}>Для пациентов</Button>
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
  /* margin: 80px 80px 0 80px; */
  @media (max-width: 1200px) {
    margin: 48px 40px 0 40px;
  }
  @media (max-width: 850px) {
    margin: 48px 16px 0 16px;
  }
`;

const customDoctorStyles = css`
  width: 200px;
  height: 60px;
  background: ${({ theme }) => theme.colors.Primary60};
  border: 2px solid blue;
  @media (max-width: 850px) {
    margin-bottom: 32px;
  }
  @media (max-width: 460px) {
    padding: 13px 13px;
  }
`;

const customPatientStyles = css`
  width: 200px;
  height: 60px;
  background: ${({ theme }) => theme.colors.White};
  border: 2px solid ${({ theme }) => theme.colors.Primary60};
  color: ${({ theme }) => theme.colors.Primary60};
  @media (max-width: 850px) {
    margin-bottom: 32px;
  }
  @media (max-width: 460px) {
    padding: 13px 13px;
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
  padding: 80px;
  @media (max-width: 1200px) {
    padding: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  /* margin: 0 80px; */

  @media (max-width: 1200px) {
    margin: 0 40px;
  }

  @media (max-width: 850px) {
    margin: 0 16px;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  /* margin: 0 80px 80px 80px; */

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
