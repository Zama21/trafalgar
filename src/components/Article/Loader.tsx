import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Loader: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <AnimationContainer>
      <AnimationImg>
        {images.map((src, index) => (
          <AnimatedImage key={index} src={src} alt={`img${index + 1}`} index={index} />
        ))}
      </AnimationImg>
    </AnimationContainer>
  );
};

const AnimationContainer = styled.div`
  background-image: url('/assets/Article/picture.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  @media (min-width: 3840px) {
    height: 400px;
  }
  @media (min-width: 1920px) {
    height: 280px;
  }
`;

const AnimationImg = styled.div`
  position: relative;
  width: 56px;
  height: 39px;
`;

const AnimatedImage = styled.img<{ index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 2s linear infinite;
  animation-delay: ${({ index }) => index * 0.1}s;
`;

export default Loader;
