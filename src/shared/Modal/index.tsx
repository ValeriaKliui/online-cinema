import { useClickOutside } from "@hooks/useClickOutside";
import { FC, useRef } from "react";
import { ModalProps } from "./interfaces";
import { Container, Overlay } from "./styled";

export const Modal: FC<ModalProps> = ({
  children,
  onClose,
  isModalOpened = false,
}) => {
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
