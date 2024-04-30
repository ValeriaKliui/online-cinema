import { Button } from "@shared/Button";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { FC } from "react";
import { FilmCardProps } from "./interfaces";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import SaveSvg from "@assets/icons/save.svg?react";
import { Container, Poster, FilmProperties, FilmInfo, Buttons } from "./styled";

export const FilmCard: FC<FilmCardProps> = ({
  nameRu,
  year,
  filmLength,
  countries,
  genres,
  description,
  posterUrl,
}) => (
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
        <Button>
          В избранное <SaveSvg />
        </Button>
      </Buttons>
    </FilmInfo>
  </Container>
);
