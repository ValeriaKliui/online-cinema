import { FC } from "react";
import { ButtonStyled } from "./styled";
import { ButtonProps } from "./interfaces";
import { Link } from "react-router-dom";

export const Button: FC<ButtonProps> = ({ children, link, ...props }) => {
  const button = <ButtonStyled {...props}>{children}</ButtonStyled>;

  return link ? <Link to={link}>{button}</Link> : button;
};
