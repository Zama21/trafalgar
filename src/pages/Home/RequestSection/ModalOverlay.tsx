import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Typography from '../../../Typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRoot = document.getElementById('modals');
  const nodeRef = useRef<HTMLDivElement>(null);

  if (!modalRoot) return null;

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit nodeRef={nodeRef}>
      <ModalOverlay onClick={onClose} ref={nodeRef}>
        <ModalContent onClick={(e) => e.stopPropagation()} className="slide">
          <Title variant="h3">Форма успешно отправлена</Title>
          <CheckmarkIcon src="/src/assets/checkmark-circle-outline.svg" alt="checkmark" />
          <Button onClick={onClose}>Вернуться к форме</Button>
        </ModalContent>
      </ModalOverlay>
    </CSSTransition>,
    modalRoot,
  );
};

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-30%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30%);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &.fade-enter {
    animation: ${fadeIn} 300ms forwards;
  }
  &.fade-enter .slide {
    animation: ${slideIn} 300ms forwards;
  }

  &.fade-exit {
    animation: ${fadeOut} 300ms forwards;
  }
  &.fade-exit .slide {
    animation: ${slideOut} 300ms forwards;
  }
`;

const ModalContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.White};
  padding: 48px;
  gap: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const Title = styled(Typography)`
  @media (max-width: 700px) {
    ${({ theme }) => theme.typography.h4}
    text-align: center;
  }
`;

const CheckmarkIcon = styled.img`
  width: 128px;
  @media (max-width: 700px) {
    width: 86px;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.typography.buttonL}
  color: #458FF6;
  cursor: pointer;
`;
