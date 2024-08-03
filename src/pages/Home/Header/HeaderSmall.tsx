import styled, { css } from 'styled-components';
import { forwardRef } from 'react';

import SearchBar from './SearchBar/SearchBar';
import MenuBar from './MenuBar/MenuBar';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { HeaderWrapper, HeaderProfileSection, HeaderShoppingCart, HeaderTopBar } from './Components/ComponentsHeader';
import Location from './Components/Location';
import Button from '../../../components/Button';

const HeaderSmall = forwardRef<HTMLDivElement>((_, ref) => (
  <HeaderWrapper ref={ref}>
    <HeaderTopBar>
      <Location location="Москва" />
      <SearchSection>
        <SearchBar
          searchContainerStyles={SearchContainerStyles}
          selectContainerStyles={SelectContainerStyles}
          selectStyles={SelectStyles}
        />
        <Button onClick={() => alert('click')} width="99px" height="32px" customStyles={BtnStyles}>
          Поиск
        </Button>
      </SearchSection>
      <HeaderProfileSection>
        <ProfileButton />
        <HeaderShoppingCart>
          <img src="/public/assets/Header/icons/shopping-cart.svg" alt="ShoppingCartIcon" />
          Корзина
          <img src="/public/assets/Header/icons/chevron-down.svg" alt="ArrowDownIcon" />
        </HeaderShoppingCart>
      </HeaderProfileSection>
    </HeaderTopBar>
    <MenuBar isSmallHeader={true} menuContainerStyles={MenuContainerStyles} />
  </HeaderWrapper>
));

HeaderSmall.displayName = 'HeaderSmall';

export default HeaderSmall;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1000px) {
    gap: 16px;
  }
`;

const SearchContainerStyles = css`
  height: 32px;
`;

const SelectContainerStyles = css`
  height: 32px;
`;
const SelectStyles = css`
  height: 32px;
`;

const BtnStyles = css`
  ${({ theme }) => theme.typography.buttonS}
`;

const MenuContainerStyles = css`
  height: 64px;
`;
