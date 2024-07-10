import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray20};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.coolGray90};
`;

export const HeaderTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray30};
  background-color: ${({ theme }) => theme.colors.White};
  padding: 8px 80px 8px 80px;
  gap: 8px;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 8px 40px 8px 40px;
  }
  @media (max-width: 1100px) {
    padding: 8px 8px 8px 8px;
  }
`;

export const HeaderProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 48px;

  @media (max-width: 1000px) {
    gap: 0px;
  }
`;

export const HeaderShoppingCart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 8px 12px 8px;
  gap: 8px;
  ${({ theme }) => theme.typography.menuTabs}

  @media (max-width: 1000px) {
    gap: 4px;
  }
`;

export interface HeaderMenuItem {
  label: string;
  path: string;
}
