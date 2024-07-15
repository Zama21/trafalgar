import styled from 'styled-components';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}


const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <img src="/public/assets/arrow-rigth.svg" alt="Next Arrow" />
    </Arrow>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <img src="/public/assets/arrow-left.svg" alt="Prev Arrow" />
    </Arrow>
  );
};

export { NextArrow, PrevArrow };

const Arrow = styled.div`
  display: flex !important;
  position: static;
  transform: translateY(0);
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  align-items: center;
  justify-content: center;

  &:before {
    display: none;
  }
`;
