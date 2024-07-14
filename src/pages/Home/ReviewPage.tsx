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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 868,
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
      <StyledSlider {...settings}>
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
              <CardUserText>
                <UserName variant="h4">{card.userName}</UserName>
                <Typography variant="bodyL">{card.userRole}</Typography>
              </CardUserText>
            </CardUser>
          </Card>
        ))}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  padding: 80px;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;

  @media (max-width: 968px) {
    padding: 48px 16px;
  }
`;

const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 1900px;

  & .slick-track {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

const Card = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};
  padding: 24px;
  gap: 16px;
  overflow: hidden;

  @media (max-width: 968px) {
    height: 425px;
  }
`;

const CardLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  min-height: 64px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.coolGray60};
  p {
    ${({ theme }) => theme.typography.h4}
  }
`;

const CardText = styled.div`
  text-align: center;
  overflow-y: auto;
  flex: 1;
`;

const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0px 0px 0px;
  gap: 16px;

  img {
    height: 48px;
    width: 48px;
    border-radius: 100%;
  }
`;

const CardUserText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UserName = styled(Typography)`
  text-align: center;
`;

export default ReviewPage;
