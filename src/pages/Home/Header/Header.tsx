import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import HeaderMobile from './HeaderMobile';
import { BREAKPOINTS } from '../../../constants';
import HeaderBig from './HeaderBig';
import HeaderSmall from './HeaderSmall';
import { HEADER_Z_INDEX } from '../../../constants/constants';
import { HEADER_ID } from './сonstants';
import useDebounce from '../../../hooks/useDebounce';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });

  const handleScroll = () => setIsScrolled(window.scrollY > 0);
  const deb = useDebounce(handleScroll, 50);

  useEffect(() => {
    window.addEventListener('scroll', deb);

    return () => {
      window.removeEventListener('scroll', deb);
    };
  }, []);

  return (
    <>
      <HeaderContainer id={HEADER_ID}>
        {!isSmallScreen && !isScrolled && <HeaderBig />}
        {!isSmallScreen && isScrolled && <HeaderSmall />}
        {isSmallScreen && <HeaderMobile></HeaderMobile>}
      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: sticky;
  z-index: ${HEADER_Z_INDEX};
  top: 0;
  width: 100%;
`;
