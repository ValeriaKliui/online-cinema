import { FC } from "react";
import { InputProps } from "./interfaces";
import { InputStyled, Container, IconStyled } from "./styled";

export const Input: FC<InputProps> = ({
  Icon,
  light,
  block,
  onIconClick,
  ...props
}) => (
  <Container $block={block}>
    <InputStyled $light={light} {...props} />
    {Icon && (
      <IconStyled onClick={onIconClick}>
        <Icon />
      </IconStyled>
    )}
  </Container>
);
