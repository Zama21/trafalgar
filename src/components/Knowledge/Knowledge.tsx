import styled from 'styled-components';

import Headling from '../Headling/Headling';
import Button from '../../components/Button/Button';
import Typography from '../../Typography';

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
        <Button kind="doctor">Для врачей</Button>
        <Button kind="patient">Для пациентов</Button>
      </ButtonWrapper>
      <SecondContainer>
        <ContainerImg>
          <DashboardImage src="/assets/dashboardSection.svg" alt="" />
        </ContainerImg>
        <ContentContainer>
          <h1 style={{ marginLeft: '${80}px' }}>Knowledge</h1>
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
  border: 1px solid purple;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  margin: 0 80px;

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
  margin: 0 80px 80px 80px;
  border: 1px solid purple;

  @media (max-width: 1200px) {
    margin: 0 40px 32px 40px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    margin: 0 16px 32px 16px;
  }
`;

const ContainerImg = styled.div`
  border: 1px solid red;
  flex: 1; /* Позволяет блоку с изображением изменять размер пропорционально */
`;

const DashboardImage = styled.img`
  width: 100%; /* Устанавливает изображение на всю ширину родительского блока */
  height: auto; /* Автоматически изменяет высоту изображения */
  border: 1px solid green;
`;

const ContentContainer = styled.div`
  flex: 1; /* Позволяет блоку с контентом изменять размер пропорционально */
  border: 1px solid blue;
`;
