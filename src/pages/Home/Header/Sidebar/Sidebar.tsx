import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../Components/Logo';
import { SearchInput } from '../Components/SearchInput';
import { MENU_ITEMS } from '../сonstants';
import { Button } from '../../../../components/CustomButton/CustomButton';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <SidebarWrapper $isOpen={isOpen}>
      <Logo height="39px" />
      <SearchInput wrapperSearchInputStyles={WrapperSearchInputStyles} />
      <MenuList>
        {MENU_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </MenuList>
      <CloseButton onClick={onClose}>Закрыть меню</CloseButton>
    </SidebarWrapper>
  );
};

export default Sidebar;

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

const CloseButton = styled(Button)`
  cursor: pointer;
  color: #458ff6;
  background-color: inherit;
  width: 100%;

  &:hover {
    background-color: #f1f1f1;
  }
`;
