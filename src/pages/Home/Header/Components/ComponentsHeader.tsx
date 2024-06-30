import styled, { css } from 'styled-components';

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

export const HeaderCitySelector = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 8px 12px 8px;
  gap: 8px;

  ${({ theme }) => theme.typography.menuTabs}
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
  value: string;
  width?: number;
  hide?: boolean;
}

const HeaderLogoStyles = styled.div<{ $CustomHeaderLogoStyles?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  height: 41px;
  img {
    height: 100%;
  }
  ${({ $CustomHeaderLogoStyles }) => $CustomHeaderLogoStyles}
`;

interface HeaderProps {
  CustomHeaderLogoStyles?: ReturnType<typeof css>;
}

export const HeaderLogo: React.FC<HeaderProps> = ({ CustomHeaderLogoStyles }) => {
  return (
    <HeaderLogoStyles $CustomHeaderLogoStyles={CustomHeaderLogoStyles}>
      <img src="/public/assets/Header/icons/logo.svg" alt="LogoIcon" />
    </HeaderLogoStyles>
  );
};

const WrapperSearchInput = styled.div<{ $WrapperSearchInputStyles?: ReturnType<typeof css> }>`
  display: flex;
  padding: 12px 16px 12px 16px;
  flex: 1;
  gap: 8px;
  ${({ $WrapperSearchInputStyles }) => $WrapperSearchInputStyles}

  @media (max-width: 900px) {
    padding: 12px 8px 12px 8px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  ${({ theme }) => theme.typography.bodyM}
  width: 100%;
`;

interface HeaderSearchInputProps {
  wrapperSearchInputStyles?: ReturnType<typeof css>;
}

export const HeaderSearchInput: React.FC<HeaderSearchInputProps> = ({ wrapperSearchInputStyles }) => {
  return (
    <WrapperSearchInput $WrapperSearchInputStyles={wrapperSearchInputStyles}>
      <img src="/public/assets/Header/icons/search.svg" alt="SearchIcon" />
      <SearchInput placeholder="Поиск по ..." />
    </WrapperSearchInput>
  );
};
