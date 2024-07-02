import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Option {
  label: string;
  path: string;
}

interface MenuBtnProps {
  options: Option[];
}

export const MenuBtn: React.FC<MenuBtnProps> = ({ options }) => {
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
        <img src="/public/assets/Header/icons/menu.svg" alt="MenuIcon" />
        Меню
      </HeaderBtn>
      {options.length !== 0 && (
        <DropdownMenu $isOpen={isOpen}>
          {options.map((item) => (
            <MenuItemStyled key={item.path}>{item.label}</MenuItemStyled>
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

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
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

const MenuItemStyled = styled.div`
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
  padding: 8px 16px 8px 16px;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  ${({ theme }) => theme.typography.menuTabs}
  font-family: ${({ theme }) => theme.fonts.primary};

  img:last-child {
    transition: transform 0.2s;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;
