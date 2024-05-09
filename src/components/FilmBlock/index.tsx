import { Button } from "@shared/Button";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { FC } from "react";
import { FilmBlockProps } from "./interfaces";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import SaveSvg from "@assets/icons/save.svg?react";
import { Container, Poster, FilmProperties, FilmInfo, Buttons } from "./styled";
import { useFavouriteFilms } from "@hooks/useFavouriteFilms";

export const FilmBlock: FC<FilmBlockProps> = ({
  nameRu,
  year,
  filmLength,
  countries,
  genres,
  description,
  posterUrl,
  kinopoiskId,
}) => {
  const { addToFavourite } = useFavouriteFilms();

  return (
    <Container className="wrapper">
      <Poster>
        <img src={posterUrl} />
      </Poster>
      <FilmInfo>
        <h2>{nameRu}</h2>
        <FilmProperties>
          <p>{year}</p>
          <p>{filmLength}м</p>
          <p>{formatArrayToStrings(countries)}</p>
          <p>{formatArrayToStrings(genres)}</p>
        </FilmProperties>
        <p>{description}</p>
        <Buttons>
          <Button>
            Смотреть по подписке <YoutubeSvg />
          </Button>
          <Button onClick={() => addToFavourite(kinopoiskId)}>
            В избранное <SaveSvg />
          </Button>
        </Buttons>
      </FilmInfo>
    </Container>
  );
};
