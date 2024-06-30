import styled, { css } from 'styled-components';
import SearchBar from './SearchBar/SearchBar';
import MenuBar from './MenuBar/MenuBar';
import { Button } from '../../../components/CustomButton/CustomButton';
import { ProfileButton } from './ProfileButton/ProfileButton';
import {
  HeaderCitySelector,
  HeaderMenuItem,
  HeaderWrapper,
  HeaderProfileSection,
  HeaderShoppingCart,
  HeaderTopBar,
} from './Components/ComponentsHeader';
import { forwardRef } from 'react';

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

const BtnContainerStyles = css`
  height: 32px;
  padding: 8px 12px 8px 12px;

  @media (max-width: 1000px) {
    padding: 8px 8px 8px 8px;
  }
`;

const BtnTextContainerStyles = css`
  ${({ theme }) => theme.typography.buttonS}
`;

const MenuContainerStyles = css`
  height: 64px;
`;

interface HeaderSmallProps {
  menuItemsProps: HeaderMenuItem[];
}
const HeaderSmall = forwardRef<HTMLDivElement, HeaderSmallProps>(({ menuItemsProps }, ref) => (
  <HeaderWrapper ref={ref}>
    <HeaderTopBar>
      <HeaderCitySelector>
        <img src="/public/assets/Header/icons/map-marker.svg" alt="CityIcon" />
        Москва
      </HeaderCitySelector>
      <SearchSection>
        <SearchBar
          searchContainerStyles={SearchContainerStyles}
          selectContainerStyles={SelectContainerStyles}
          selectStyles={SelectStyles}
        />
        <Button
          customTextContainerStyled={BtnTextContainerStyles}
          customBtnStyled={BtnContainerStyles}
          onClick={() => alert('Button Clicked!')}
        >
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
    <MenuBar menuItems={menuItemsProps} isSmallHeader={true} menuContainerStyles={MenuContainerStyles} />
  </HeaderWrapper>
));

HeaderSmall.displayName = 'HeaderSmall';

export default HeaderSmall;
