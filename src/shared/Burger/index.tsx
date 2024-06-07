import { FC } from "react";
import { BurgerLine, Container } from "./styled";
import { BurgerProps } from "./interfaces";

export const Burger: FC<BurgerProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      {Array(3)
        .fill(1)
        .map((_, index) => (
          <BurgerLine key={index} />
        ))}
    </Container>
  );
};
