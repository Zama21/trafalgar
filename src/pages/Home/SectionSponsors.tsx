import React from 'react';
import styled from 'styled-components';
import Typography from '../../Typography';
import { sponsors } from '../../constants/footer';

const SectionsSponsors: React.FC = () => {
  return (
    <SectionContainer>
      <SponsorContainer>
        {sponsors.map((sponsor, index) => (
          <LogoContainer key={index}>
            <Logo src={sponsor.logoSrc} alt={sponsor.altText} />
            <Typography variant="h4">{sponsor.name}</Typography>
          </LogoContainer>
        ))}
        <LogoContainer>
          <Logo src="/src/assets/WAVESMARATHON.svg" alt="WAVESMARATHON logo" />
          <WAVESMARATHONЕ variant="h4">WAVESMARATHON</WAVESMARATHONЕ>
        </LogoContainer>
      </SponsorContainer>
    </SectionContainer>
  );
};

export default SectionsSponsors;

const SectionContainer = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  padding: 80px;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 1400px) {
    padding: 60px;
  }

  @media (max-width: 1000px) {
    padding: 48px 16px 48px 16px;
  }
`;

const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 32px 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 2fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 3fr);
  }
  @media (max-width: 388px) {
    grid-template-columns: repeat(1, 6fr);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Logo = styled.img`
  height: 100%;
`;

const WAVESMARATHONЕ = styled(Typography)`
  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.h6}
  }
`;
