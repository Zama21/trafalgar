import styled from 'styled-components';
import SearchBar from './SearchBar/SearchBar';
import MenuBar from './MenuBar/MenuBar';
import { Button } from '../../../components/CustomButton/CustomButton';
import { ProfileButton } from './ProfileButton/ProfileButton';
import {
  HeaderLogo,
  HeaderCitySelector,
  HeaderMenuItem,
  HeaderWrapper,
  HeaderProfileSection,
  HeaderShoppingCart,
  HeaderTopBar,
} from './Components/ComponentsHeader';
import { forwardRef } from 'react';

const NavBar = styled.div`
  display: flex;
  padding: 24px 80px 24px 80px;
  gap: 24px;
  height: 96px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  @media (max-width: 1200px) {
    padding: 8px 40px 8px 40px;
  }
`;

interface HeaderBigProps {
  menuItemsProps: HeaderMenuItem[];
}

const HeaderBig = forwardRef<HTMLDivElement, HeaderBigProps>(({ menuItemsProps }, ref) => (
  <HeaderWrapper ref={ref}>
    <HeaderTopBar>
      <HeaderCitySelector>
        <img src="/public/assets/Header/icons/map-marker.svg" alt="CityIcon" />
        Москва
      </HeaderCitySelector>
      <HeaderProfileSection>
        <ProfileButton />
        <HeaderShoppingCart>
          <img src="/public/assets/Header/icons/shopping-cart.svg" alt="ShoppingCartIcon" />
          Корзина
          <img src="/public/assets/Header/icons/chevron-down.svg" alt="ArrowDownIcon" />
        </HeaderShoppingCart>
      </HeaderProfileSection>
    </HeaderTopBar>
    <NavBar>
      <HeaderLogo />

      <SearchBar />
      <Button onClick={() => alert('Button Clicked!')}>Поиск</Button>
    </NavBar>
    <MenuBar menuItems={menuItemsProps} />
  </HeaderWrapper>
));

HeaderBig.displayName = 'HeaderBig';

export default HeaderBig;
