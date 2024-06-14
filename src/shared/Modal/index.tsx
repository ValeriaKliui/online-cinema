import { FC, useRef } from "react";
import { ModalProps } from "./interfaces";
import { Close, Container, Content, Overlay } from "./styled";

export const Modal: FC<ModalProps> = ({
  children,
  onClose,
  isModalOpened = false,
}) => {
  const modalContainer = useRef(null);

  return (
    <Overlay $isOpened={isModalOpened} onClick={onClose}>
      <Container ref={modalContainer} onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose} width={"1em"} />
        <Content> {children}</Content>
      </Container>
    </Overlay>
  );
};
