import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useDebounce from '../../../../hooks/useDebounce';
import { MenuBtn } from '../MenuBtn/MenuBtn';
import { HeaderLogo, HeaderMenuItem } from '../Components/ComponentsHeader';

const MenuBarContainer = styled.div<{ $menuContainerStyles?: ReturnType<typeof css> }>`
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

function getWidthWithoutPadding(element: HTMLElement): number {
  const style = window.getComputedStyle(element);
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;
  return element.clientWidth - paddingLeft - paddingRight;
}
const saveChildrenWidths = (container: HTMLElement, items: HeaderMenuItem[]) => {
  const updatedItems = items.map((item, index) => {
    const child = container.children[index] as HTMLElement;
    item.width = child.offsetWidth;

    return item;
  });

  return updatedItems;
};

interface MenuBarProps {
  isSmallHeader?: boolean;
  menuItems: HeaderMenuItem[];
  menuContainerStyles?: ReturnType<typeof css>;
}

const MenuBar: React.FC<MenuBarProps> = ({ isSmallHeader, menuContainerStyles, menuItems }) => {
  const [visibleItems, setVisibleItems] = useState<HeaderMenuItem[]>(menuItems);
  const [hiddenItems, setHiddenItems] = useState<HeaderMenuItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      saveChildrenWidths(containerRef.current, menuItems);
    }
  }, [menuItems]);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = getWidthWithoutPadding(containerRef.current);
      const gap = parseFloat(window.getComputedStyle(containerRef.current).gap) || 0;

      let totalWidth = 0;
      let newVisibleItems = [];
      let newHiddenItems = [];

      for (const item of menuItems) {
        if (item.width)
          if (totalWidth + item.width <= containerWidth) {
            if (!item.hide) newVisibleItems.push(item);
            totalWidth += item.width + gap;
          } else {
            if (!item.hide) newHiddenItems.push(item);
          }
      }

      setVisibleItems(newVisibleItems);
      setHiddenItems(newHiddenItems);
    }
  }, [menuItems]);

  const debouncedHandleResize = useDebounce(handleResize, 100);

  useEffect(() => {
    setTimeout(() => {
      debouncedHandleResize();
    }, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return (
    <MenuBarContainer ref={containerRef} $menuContainerStyles={menuContainerStyles}>
      {isSmallHeader && <HeaderLogo />}
      <MenuBtn options={hiddenItems} />
      {visibleItems
        .filter((item) => !item.hide)
        .map(({ label, value }) => (
          <MenuItem key={value}>{label}</MenuItem>
        ))}
    </MenuBarContainer>
  );
};

export default MenuBar;
