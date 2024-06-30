import React from 'react';
import styled, { css } from 'styled-components';
import { HeaderLogo, HeaderSearchInput } from '../Components/ComponentsHeader';
import { NavLink } from 'react-router-dom';

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  width: 256px;
  height: 100vh;
  max-height: 1024px;
  padding: 24px 16px 24px 16px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.White};
  border-right: 1px solid;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray20};
  transition: all 0.3s ease;
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  font-family: ${({ theme }) => theme.fonts.primary};
`;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoWrapper = styled.div`
  height: 39px;
  width: 100%;
`;

const WrapperSearchInputStyles = css`
  flex: none;
  height: 48px;
  width: 100%;
  padding: 12px 16px 12px 16px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray30};
  background-color: ${({ theme }) => theme.colors.coolGray10};
`;

const MenuList = styled.ul`
  flex: 1;
  color: ${({ theme }) => theme.colors.coolGray90};

  li a {
    display: block;
    padding: 12px 8px 12px 8px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.coolGray10};
    cursor: pointer;
    transition: background-color 0.2s;
    ${({ theme }) => theme.typography.menuTabs}

    &:hover {
      background-color: ${({ theme }) => theme.colors.coolGray10};
    }
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 16px 12px 16px 12px;
  border: 2px solid;
  border-color: #458ff6;
  cursor: pointer;
  ${({ theme }) => theme.typography.buttonM}
  color: #458FF6;

  span {
    padding: 0px 16px 0px 16px;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LogoStyles = css`
  height: 39px;
  justify-content: center;
`;

const menuItems = [
  { label: 'Главная', path: '/trafalgar/' },
  { label: 'О проекте', path: '/trafalgar#about' },
  { label: 'Статьи', path: '/trafalgar#articles' },
  { label: 'Отзывы', path: '/trafalgar#reviews' },
  { label: 'Знания', path: '/trafalgar#knowledge' },
  { label: 'Вопросы', path: '/trafalgar#questions' },
  { label: 'Цены', path: '/trafalgar#pricing' },
  { label: 'Оставить заявку', path: '/trafalgar#apply' },
  { label: 'Спонсоры', path: '/trafalgar#sponsors' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <SidebarWrapper $isOpen={isOpen}>
      <LogoWrapper>
        <HeaderLogo CustomHeaderLogoStyles={LogoStyles} />
      </LogoWrapper>
      <HeaderSearchInput wrapperSearchInputStyles={WrapperSearchInputStyles} />
      <MenuList>
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </MenuList>
      <CloseButton onClick={onClose}>
        <span>Закрыть меню</span>
      </CloseButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
