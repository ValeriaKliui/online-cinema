import { FC } from "react";
import { Container, IconContainer } from "./styled";
import { GenreProps } from "./interfaces";

export const Genre: FC<GenreProps> = ({
  genreName,
  genre,
  Icon,
  amount,
  onClick,
}) => (
  <Container key={genre} onClick={() => onClick(genre)}>
    <IconContainer>
      <Icon height={40} width={40} />
    </IconContainer>
    <div>
      <p className="l">
        {genreName.slice(0, 1).toUpperCase() + genreName.slice(1)}
      </p>
      <p className="primary-text">{amount}к+ фильмов</p>
    </div>
  </Container>
);
