import styled from 'styled-components';
import Typography from '../../Typography.tsx';
import { useState } from 'react';

const StyledTypography = styled(Typography)``;

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  margin: 0 auto;
  padding: 80px;
  display: flex;
  justify-content: center;
  @media (max-width: 393px) {
    padding: 48px 16px 48px 16px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  align-items: center;
  gap: 16px;
  @media (max-width: 393px) {
    max-width: 361px;
    gap: 8px;
  }
`;

const CarouselInnerWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  gap: 16px;
  @media (max-width: 393px) {
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
    gap: 8px;
  }
`;

const Card = styled.div`
  flex: 0 0 49%;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #dde1e6;
  padding: 24px;
  box-sizing: border-box;
  @media (max-width: 393px) {
    flex: 0 0 35%;
    gap: 16px;
  }
`;

const CardLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.coolGray60};
  p {
    ${({ theme }) => theme.typography.h4}
  }
`;

const CardText = styled.div`
  margin-bottom: 16px;
`;

const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 16px 0;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      logoSrc: '/public/assets/cardlogo.svg',
      logoAlt: 'cardLogo',
      title: 'Zoomerr',
      text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
      userImgSrc: '/public/assets/userLogo.svg',
      userName: 'Петров Петр',
      userRole: 'Невролог',
    },
    {
      logoSrc: '/public/assets/artVenue.svg',
      logoAlt: 'cardLogo',
      title: 'ArtVenue',
      text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
      userImgSrc: '/public/assets/userLogo.svg',
      userName: 'Кириллов Кирилл',
      userRole: 'Пульмонолог',
    },
    {
      logoSrc: '/public/assets/cardlogo.svg',
      logoAlt: 'cardLogo',
      title: 'Kontrast',
      text: 'Текст новой карточки для демонстрации работы карусели.',
      userImgSrc: '/public/assets/userLogo.svg',
      userName: 'Иван Иванов',
      userRole: 'Терапевт',
    },
    {
      logoSrc: '/public/assets/artVenue.svg',
      logoAlt: 'cardLogo',
      title: 'SmartFinder',
      text: 'Еще один текст для демонстрации работы карусели.',
      userImgSrc: '/public/assets/userLogo.svg',
      userName: 'Сергей Сергеев',
      userRole: 'Кардиолог',
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length / 2));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(cards.length / 2)) % Math.ceil(cards.length / 2));
  };

  return (
    <Container>
      <CarouselWrapper>
        <ArrowButton onClick={prevImage}>
          <img src="/public/assets/arrow-left.svg" alt="arrow-left" />
        </ArrowButton>
        <CarouselInnerWrapper>
          <CarouselInner currentIndex={currentIndex}>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardLogo>
                  <img src={card.logoSrc} alt={card.logoAlt} />
                  <p>{card.title}</p>
                </CardLogo>
                <CardText>
                  <StyledTypography variant="bodyL">{card.text}</StyledTypography>
                </CardText>
                <CardUser>
                  <img src={card.userImgSrc} alt="userLogo" />
                  <StyledTypography variant="h4">{card.userName}</StyledTypography>
                  <StyledTypography variant="bodyL">{card.userRole}</StyledTypography>
                </CardUser>
              </Card>
            ))}
          </CarouselInner>
        </CarouselInnerWrapper>
        <ArrowButton onClick={nextImage}>
          <img src="/public/assets/arrow-rigth.svg" alt="arrow-right" />
        </ArrowButton>
      </CarouselWrapper>
    </Container>
  );
};

export default Section4;
