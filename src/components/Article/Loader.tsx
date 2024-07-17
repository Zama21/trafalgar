import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Loader: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <AnimationImg>
      {images.map((src, index) => (
        <AnimatedImage key={index} src={src} alt={`img${index + 1}`} $index={index} />
      ))}
    </AnimationImg>
  );
};

const AnimationImg = styled.div`
  position: relative;
  width: 56px;
  height: 39px;
`;

const AnimatedImage = styled.img<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 2s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.1}s;
`;

export default Loader;
