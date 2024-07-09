import styled from 'styled-components';

function Knowledge() {
  return (
    <PageKnowledge>
      <SecondContainer>
        <ContainerImg>
          <DashboardImage src="/assets/dashbord.svg" alt="" />
        </ContainerImg>
        <ContentContainer>
          <h1>Knowledge</h1>
        </ContentContainer>
      </SecondContainer>
    </PageKnowledge>
  );
}

export default Knowledge;

const PageKnowledge = styled.div`
  width: 100%;
  border: 1px solid purple;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  margin: 0 auto;
  border: 1px solid purple;
  max-width: 1280px;
`;
const ContainerImg = styled.div`
  height: auto;
  width: 50%;
  border: 1px solid red;
`;

const DashboardImage = styled.img`
  /* height: auto; */
  /* width: 100%;
  height: 100%;
  object-fit: cover; */
`;
const ContentContainer = styled.div`
  /* margin-left: 80px; */
  /* width: 100%; */
  /* width: 1280px; */
`;
