import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { HeaderMenuItem } from '../Components/ComponentsHeader';
import Logo from '../Components/Logo';
import { MENU_ITEMS } from '../сonstants';
import { MenuBtn } from '../MenuBtn/MenuBtn';
import useDebounce from '../../../../hooks/useDebounce';

interface MenuBarProps {
  isSmallHeader?: boolean;
  menuContainerStyles?: ReturnType<typeof css>;
}

const MenuBar: React.FC<MenuBarProps> = ({ isSmallHeader, menuContainerStyles }) => {
  const [visibleItems] = useState<HeaderMenuItem[]>(MENU_ITEMS);
  const [hiddenItems, setHiddenItems] = useState<HeaderMenuItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>(MENU_ITEMS[0]?.id || undefined);
  const location = useLocation();
  const containerRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const updateVisibleItems = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastVisibleIndex = -1;
    const containerBottom = container.getBoundingClientRect().bottom;

    for (let i = 0; i < itemRefs.current.length; i++) {
      const item = itemRefs.current[i];

      if (item) {
        const itemBottom = item.getBoundingClientRect().bottom;
        if (itemBottom > containerBottom) {
          lastVisibleIndex = i;
          break;
        }
      }
    }
    if (lastVisibleIndex === -1) {
      setHiddenItems([]);
      return;
    }

    const newHiddenItems = MENU_ITEMS.slice(lastVisibleIndex);

    if (JSON.stringify(hiddenItems) !== JSON.stringify(newHiddenItems)) {
      setHiddenItems(newHiddenItems);
    }
  }, [hiddenItems]);

  const deb = useDebounce(updateVisibleItems, 100);

  useLayoutEffect(() => {
    setTimeout(updateVisibleItems, 300);

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(deb);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateVisibleItems, deb]);

  useEffect(() => {
    setActiveTab(`${location.pathname + location.hash}`);
  }, [location.hash]);

  return (
    <MenuBarContainer $menuContainerStyles={menuContainerStyles}>
      {isSmallHeader && <Logo />}
      <MenuBtn options={hiddenItems} isActive={hiddenItems.some((item) => item.path === activeTab)} />
      <MenuItemContainer ref={containerRef}>
        {visibleItems.map(({ label, path }, index) => (
          <MenuItem key={path} $active={activeTab === path} ref={(el) => (itemRefs.current[index] = el)}>
            <MenuItemLink href={path}>{label}</MenuItemLink>
          </MenuItem>
        ))}
      </MenuItemContainer>
    </MenuBarContainer>
  );
};

export default MenuBar;

const MenuBarContainer = styled.nav<{ $menuContainerStyles?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  height: 48px;
  gap: 8px;
  padding: 8px 80px 8px 80px;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  ${({ $menuContainerStyles }) => $menuContainerStyles}
  @media (max-width: 1200px) {
    padding: 8px 40px 8px 40px;
  }
`;

const MenuItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 32px;
  gap: 8px;
  overflow: hidden;
`;

const MenuItem = styled.li<{ $active: boolean }>`
  cursor: pointer;
  background-color: ${({ $active, theme }) => ($active ? theme.colors.White : theme.colors.coolGray10)};
  border: ${({ $active, theme }) => ($active ? `1px solid ${theme.colors.coolGray30}` : 'none')};
  ${({ theme }) => theme.typography.menuTabs}
  height: 100%;
  transition: all 0.5s ease;
`;

const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
  white-space: nowrap;
  user-select: none;
`;
