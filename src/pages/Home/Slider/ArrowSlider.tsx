import React from 'react';
import styled from 'styled-components';

const ArrowRight = styled.div`
  //display: block;
  //position: absolute;
  //top: 50%;
  //right: 16px; /* Position 16px from the right edge of the carousel */
  //transform: translate(0, -50%);
  //cursor: pointer;
  //z-index: 2;
  //width: 16px;
  //height: 76px;
  //background: none;
  //border: none;
  &:before {
    display: none; /* скрываем стандартные стрелки */
  }
`;

const ArrowLeft = styled.div`
  //display: block;
  //position: absolute;
  //top: 50%;
  //left: 16px; /* Position 16px from the left edge of the carousel */
  //transform: translate(0, -50%);
  //cursor: pointer;
  //z-index: 2;
  //width: 16px;
  //height: 76px;
  //background: none;
  //border: none;
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
