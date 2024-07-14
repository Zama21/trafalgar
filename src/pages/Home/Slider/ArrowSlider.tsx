import styled from 'styled-components';

const ArrowRight = styled.div`
  &:before {
    display: none; /* скрываем стандартные стрелки */
  }
`;

const ArrowLeft = styled.div`
  &:before {
    display: none; /* скрываем стандартные стрелки */
  }
`;

const NextArrow = ({ className, style, onClick }) => {
  return (
    <ArrowRight className={className} style={{ ...style }} onClick={onClick}>
      <img src="/public/assets/arrow-rigth.svg" alt="Next Arrow" />
    </ArrowRight>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <ArrowLeft className={className} style={{ ...style }} onClick={onClick}>
      <img src="/public/assets/arrow-left.svg" alt="Prev Arrow" />
    </ArrowLeft>
  );
};

export { NextArrow, PrevArrow };
