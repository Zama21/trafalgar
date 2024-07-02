import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

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
  const [visibleItems, setVisibleItems] = useState<HeaderMenuItem[]>(MENU_ITEMS);
  const [hiddenItems, setHiddenItems] = useState<HeaderMenuItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    updateVisibleItems();
    setTimeout(updateVisibleItems, 300);

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(deb);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateVisibleItems, deb]);

  return (
    <MenuBarContainer $menuContainerStyles={menuContainerStyles}>
      {isSmallHeader && <Logo />}
      <MenuBtn options={hiddenItems} />
      <MenuItemContainer ref={containerRef}>
        {visibleItems.map(({ label, path }, index) => (
          <MenuItem key={path} ref={(el) => (itemRefs.current[index] = el)}>
            {label}
          </MenuItem>
        ))}
      </MenuItemContainer>
    </MenuBarContainer>
  );
};

export default MenuBar;

const MenuBarContainer = styled.div<{ $menuContainerStyles?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  /* overflow: hidden; */
  height: 48px;
  gap: 8px;
  padding: 8px 80px 8px 80px;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  ${({ $menuContainerStyles }) => $menuContainerStyles}
  @media (max-width: 1200px) {
    padding: 8px 40px 8px 40px;
  }
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 32px;
  gap: 8px;
  overflow: hidden;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  ${({ theme }) => theme.typography.menuTabs}
`;
