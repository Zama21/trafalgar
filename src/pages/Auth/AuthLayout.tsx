import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
const Content = styled.div`
  border-left: 1px solid black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    order: 1;
    border-left: 1px solid black;
  }
`;
const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) {
    order: 2;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 300px; /* Раскомментируй эту строку */
  @media (min-width: 1200px) {
    height: auto;
    width: 100%;
    max-height: none;
  }
`;

export function AuthLayout() {
  return (
    <>
      <Layout>
        <Logo>
          <StyledImage src="/assets/placer.svg" alt="" />
        </Logo>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}

// На месте Outlet рендерится children из маршрута
