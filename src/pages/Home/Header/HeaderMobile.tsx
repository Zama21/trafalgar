import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import { HeaderLogo } from './Components/ComponentsHeader';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray20};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const LogoStyles = css`
  height: 24px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  gap: 8px;
  color: #001d6c;
  user-select: none;

  .cart {
    position: relative;
    padding: 16px 8px 16px 8px;
    cursor: pointer;
  }

  .cart span {
    position: absolute;
    top: 10px;
    right: 0;
    background-color: ${({ theme }) => theme.colors.Error};
    color: ${({ theme }) => theme.colors.White};
    border-radius: 50%;
    padding: 0.5px 5.5px 0.5px 5.5px;
    ${({ theme }) => theme.typography.bodyXS}
  }

  .menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 8px 16px 8px;
    gap: 16px;
    ${({ theme }) => theme.typography.buttonM}
    color: #001D6C;
  }
`;

const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo CustomHeaderLogoStyles={LogoStyles} />
        <MenuWrapper>
          <div className="cart">
            <img src="/public/assets/Header/icons/shopping-cart.svg" alt="ShoppingCartIcon" />
            <span>9</span>
          </div>
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <img src="/public/assets/Header/icons/menu.svg" alt="MenuIcon" />
            <span>Меню</span>
          </div>
        </MenuWrapper>
      </HeaderWrapper>
      <Sidebar isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default HeaderMobile;
