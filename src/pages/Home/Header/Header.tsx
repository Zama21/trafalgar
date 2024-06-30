import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBig from './HeaderBig';
import HeaderSmall from './HeaderSmall';
import { HeaderMenuItem } from './Components/ComponentsHeader';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';
import HeaderMobile from './HeaderMobile';

const HeaderContainer = styled.div`
  .header-enter {
    opacity: 0;
    transform: translateY(-20px);
  }
  .header-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 500ms,
      transform 500ms;
  }
  .header-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .header-exit-active {
    opacity: 0;
    transform: translateY(-200px);
    transition:
      opacity 100ms,
      transform 500ms;
  }
`;

const menuItems: HeaderMenuItem[] = [
  { label: 'меню', value: 'menu', hide: true },
  { label: 'Главная', value: 'home' },
  { label: 'О проекте', value: 'about' },
  { label: 'Статьи', value: 'articles' },
  { label: 'Отзывы', value: 'reviews' },
  { label: 'Знания', value: 'knowledge' },
  { label: 'Вопросы', value: 'questions' },
  { label: 'Цены', value: 'prices' },
  { label: 'Оставить заявку', value: 'submit' },
  { label: 'Спонсоры', value: 'sponsors' },
];

const extraMenuItems: HeaderMenuItem[] = [{ label: 'Logo', value: 'Logo', hide: true }];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerBigRef = useRef<HTMLDivElement>(null);
  const headerSmallRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 835px)' });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 208) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isSmallScreen && (
        <HeaderContainer>
          <TransitionGroup component={null}>
            {!isScrolled && (
              <CSSTransition nodeRef={headerBigRef} key="headerBig" timeout={500} classNames="header">
                <HeaderBig ref={headerBigRef} menuItemsProps={menuItems} />
              </CSSTransition>
            )}

            {isScrolled && (
              <CSSTransition nodeRef={headerSmallRef} key="headerSmall" timeout={500} classNames="header">
                <HeaderSmall ref={headerSmallRef} menuItemsProps={[...extraMenuItems, ...menuItems]} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </HeaderContainer>
      )}
      {isSmallScreen && <HeaderMobile></HeaderMobile>}
      <Outlet />
    </>
  );
};

export default Header;
