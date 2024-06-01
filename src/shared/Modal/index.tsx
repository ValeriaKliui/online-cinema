import { useClickOutside } from "@hooks/useClickOutside";
import { useRef } from "react";
import { Container, Overlay } from "./styled";

export const Modal = ({ children, onClose, isModalOpened = false }) => {
  const modalContainer = useRef(null);
  useClickOutside(modalContainer, onClose);

  return (
    <Overlay $isOpened={isModalOpened}>
      <Container ref={modalContainer}>
        <p onClick={onClose}> x</p>
        {children}
      </Container>
    </Overlay>
  );
};
