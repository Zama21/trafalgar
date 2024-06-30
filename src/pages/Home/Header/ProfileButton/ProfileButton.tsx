import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MenuItemStyled = styled(Link)`
  padding: 12px 16px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #ddd;
  }
`;

const HeaderBtn = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 8px;
  gap: 8px;
  ${({ theme }) => theme.typography.menuTabs}
  background: none;
  border: none;

  img:last-child {
    transition: transform 0.2s;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }

  @media (max-width: 1000px) {
    gap: 4;
  }
`;

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Вход', path: '/trafalgar/auth/login' },
  { label: 'Регистрация', path: '/trafalgar/auth/register' },
];

export const ProfileButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      <HeaderBtn $isOpen={isOpen} onClick={toggleDropdown}>
        <img src="/public/assets/Header/icons/user.svg" alt="UserIcon" />
        Профиль
        <img src="/public/assets/Header/icons/chevron-down.svg" alt="ArrowDownIcon" />
      </HeaderBtn>
      <DropdownMenu $isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <MenuItemStyled key={index} to={item.path}>
            {item.label}
          </MenuItemStyled>
        ))}
      </DropdownMenu>
    </ProfileButtonContainer>
  );
};
