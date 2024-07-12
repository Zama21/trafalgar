import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 800px) {
    height: 100vh;
    order: 1;
  }
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 800px) {
    width: 100vw;
    height: 100%;
    order: 2;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  display: block;
  @media (max-width: 800px) {
    max-height: 280px;
  }
`;
