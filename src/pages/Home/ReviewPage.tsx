import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '../../Typography.tsx';
import { cards } from '../../constants/cards.ts';
import { NextArrow, PrevArrow } from './Slider/ArrowSlider.tsx';

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 3240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ReviewPage = () => {
  return (
    <Container>
      <CarouselWrapper>
        <StyledSlider>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardLogo>
                  <img src={card.logoSrc} alt={card.logoAlt} />
                  <p>{card.title}</p>
                </CardLogo>
                <CardText>
                  <Typography variant="bodyL">{card.text}</Typography>
                </CardText>
                <CardUser>
                  <img src={card.userImgSrc} alt="userLogo" />
                  <Typography variant="h4">{card.userName}</Typography>
                  <Typography variant="bodyL">{card.userRole}</Typography>
                </CardUser>
              </Card>
            ))}
          </Slider>
        </StyledSlider>
      </CarouselWrapper>
    </Container>
  );
};

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  .slick-prev {
    @media (max-width: 1024px) {
      left: 0px;
    }
  }
  .slick-slider {
    max-width: 100%;
    @media (max-width: 360px) {
      max-width: 297px;
    }
  }
  .slick-list {
    @media (max-width: 1024px) {
      margin: 0 16px;
    }
  }
  .slick-list {
    margin: 0 -8px;
  }

  .slick-slide > div {
    margin: 0 8px;
  }

  .slick-list {
    margin: 0 16px;
  }
`;

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  margin: 0 auto;
  padding: 80px;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  @media (max-width: 1024px) {
    max-width: 100vw;
  }
  @media (max-width: 768px) {
    padding: 48px 16px;
  }
  @media (max-width: 360px) {
    max-width: 100vw;
    padding: 48px 16px;
  }
`;

const CarouselWrapper = styled.div`
  max-width: 1280px;
  padding: 16px;
  width: 100vw;
  @media (max-width: 1440px) {
    max-width: 90vw;
  }
`;

const Card = styled.div`
  width: 100%;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #dde1e6;
  padding: 24px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    max-width: 592px;
    max-height: 350px;
  }
  @media (max-width: 768px) {
    max-width: 740px;
    max-height: 425px;
  }
  @media (max-width: 360px) {
    max-width: 297px;
  }
`;

const CardLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.coolGray60};

  p {
    ${({ theme }) => theme.typography.h4}
  }
`;

const CardText = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 16px 0;
  }
`;

export default ReviewPage;
