import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'bbbchut_test1_bbbchut13';

import Footer from './Footer';
import { HEADER_HEIGHT, MENU_ITEMS } from './Header/сonstants';
import useDebounce from '../../hooks/useDebounce';
import { BREAKPOINTS } from '../../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({});
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.IPAD})` });

  const debouncedNavigate = useDebounce((sectionId: string) => {
    navigate(`#${sectionId}`, { replace: true });
  }, 300);

  useEffect(() => {
    if (location.hash) {
      window.location.href = location.hash;

      setTimeout(() => {
        window.location.href = location.hash;
      }, 1000);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              debouncedNavigate(sectionId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );
    setTimeout(() => {
      Object.values(sectionRefs.current).forEach((section) => {
        sectionObserver.observe(section);
      });
    }, 1000);

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const handleSectionRef = (id: string) => (element: HTMLDivElement) => {
    if (element) sectionRefs.current[id] = element;
  };

  return (
    <div>
      {MENU_ITEMS.map((item) => {
        const SectionComponent = item.section;
        return (
          <WrapperSection key={`WrapperSection_${item.id}`}>
            <ScrollAnchor
              className="aaa"
              id={item.id}
              key={`Section_${item.id}`}
              ref={handleSectionRef(item.id)}
              $isSmallScreen={isSmallScreen}
            />
            <SectionComponent key={item.id} />
          </WrapperSection>
        );
      })}

      <Footer />
    </div>
  );
};

export default Home;

const WrapperSection = styled.div`
  position: relative;
`;

const ScrollAnchor = styled.div<{ $isSmallScreen: boolean }>`
  position: absolute;
  top: ${({ $isSmallScreen }) =>
    $isSmallScreen ? `-${HEADER_HEIGHT.mobileHeight}` : `-${HEADER_HEIGHT.desktopHeight}`}px;
  height: 100%;
  width: 0;
`;
