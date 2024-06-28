import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  border-left: 1px solid var(--separator-color);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function AuthLayout() {
  return (
    <>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <Logo>
          <StyledImage src="/assets/placer.svg" alt="" />
        </Logo>
      </Layout>
    </>
  );
}

// На месте Outlet рендерится children из маршрута
