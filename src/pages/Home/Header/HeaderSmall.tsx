import styled, { css } from 'styled-components';
import { forwardRef } from 'react';

import SearchBar from './SearchBar/SearchBar';
import MenuBar from './MenuBar/MenuBar';
import { Button } from '../../../components/CustomButton/CustomButton';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { HeaderWrapper, HeaderProfileSection, HeaderShoppingCart, HeaderTopBar } from './Components/ComponentsHeader';
import Location from './Components/Location';

const HeaderSmall = forwardRef<HTMLDivElement>((props, ref) => (
  <HeaderWrapper ref={ref}>
    <HeaderTopBar>
      <Location location="Москва" />
      <SearchSection>
        <SearchBar
          searchContainerStyles={SearchContainerStyles}
          selectContainerStyles={SelectContainerStyles}
          selectStyles={SelectStyles}
        />
        <SmallBtn onClick={() => alert('click')}>Поиск</SmallBtn>
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

const SmallBtn = styled(Button)`
  height: 32px;
  padding: 8px 12px 8px 12px;

  @media (max-width: 1000px) {
    padding: 8px 8px 8px 8px;
    width: 90px;
  }
`;

const MenuContainerStyles = css`
  height: 64px;
`;
