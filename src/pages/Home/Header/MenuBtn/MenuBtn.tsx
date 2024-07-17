import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface Option {
  label: string;
  path: string;
}

interface MenuBtnProps {
  options: Option[];
  isActive: boolean;
}

export const MenuBtn: React.FC<MenuBtnProps> = ({ options, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ProfileButtonContainer ref={containerRef}>
      <HeaderBtn $isOpen={isOpen} onClick={toggleDropdown} $isActive={isActive}>
        <img src="/public/assets/Header/icons/menu.svg" alt="MenuIcon" />
        Меню
      </HeaderBtn>
      {options.length !== 0 && (
        <DropdownMenu $isOpen={isOpen}>
          {options.map((item) => (
            <MenuItemStyled key={item.path} $isActive={item.path === `${location.pathname}${location.hash}`}>
              <MenuItemStyledLink href={item.path}>{item.label}</MenuItemStyledLink>
            </MenuItemStyled>
          ))}
        </DropdownMenu>
      )}
    </ProfileButtonContainer>
  );
};

const ProfileButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.ul<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  min-width: 200px;
  width: auto;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MenuItemStyled = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  color: inherit;

  background-color: ${({ $isActive }) => ($isActive ? '#ddd' : 'none')};
  &:hover {
    background-color: #ddd;
  }
`;

const MenuItemStyledLink = styled.a`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
`;

const HeaderBtn = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 4px 16px 4px 16px;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  height: 32px;
  ${({ theme }) => theme.typography.menuTabs}
  font-family: ${({ theme }) => theme.fonts.primary};

  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.White : theme.colors.coolGray10)};
  border: ${({ $isActive, theme }) => ($isActive ? `1px solid ${theme.colors.coolGray30}` : 'none')};

  img:last-child {
    transition: transform 0.2s;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;
