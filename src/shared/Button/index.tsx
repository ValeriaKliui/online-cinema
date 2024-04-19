import { FC } from "react";
import { ButtonStyled } from "./styled";
import { ButtonProps } from "./interfaces";

export const Button: FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);
