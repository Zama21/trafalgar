import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import HeaderMobile from './HeaderMobile';
import { BREAKPOINTS } from '../../../constants';
import HeaderBig from './HeaderBig';
import HeaderSmall from './HeaderSmall';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerBigRef = useRef<HTMLDivElement>(null);
  const headerSmallRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
                <HeaderBig ref={headerBigRef} />
              </CSSTransition>
            )}

            {isScrolled && (
              <CSSTransition nodeRef={headerSmallRef} key="headerSmall" timeout={500} classNames="header">
                <HeaderSmall ref={headerSmallRef} />
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

const HeaderContainer = styled.div`
  .header-enter {
    opacity: 1;
    transform: translateY(-70%);
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
    transform: translateY(-100%);
    transition:
      opacity 100ms,
      transform 500ms;
  }
`;
