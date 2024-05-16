import { FC } from "react";
import { FilmCardProps } from "./interfaces";
import {
  Container,
  Description,
  FilmImg,
  ImgContainer,
  Rating,
} from "./styled";

export const FilmCard: FC<FilmCardProps> = ({
  kinopoiskId,
  posterUrlPreview,
  nameRu,
  year,
  ratingImdb,
  ratingKinopoisk,
  expanded,
  nameEn,
  nameOriginal,
}) => {
  const rating = (ratingImdb ?? ratingKinopoisk)?.toFixed(1);

  return (
    <Container key={kinopoiskId} $expanded={expanded}>
      <ImgContainer>
        <FilmImg src={posterUrlPreview} />
      </ImgContainer>
      <Description>
        <p className="m">{nameRu || nameEn || nameOriginal}</p>
        {year && <p>{year}</p>}
        {rating && <Rating>{rating}</Rating>}
      </Description>
    </Container>
  );
};
