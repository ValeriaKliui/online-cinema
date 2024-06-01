import { ReactElement } from "react";

export interface ModalProps {
  children: ReactElement;
  onClose: () => void;
  isModalOpened: boolean;
}
