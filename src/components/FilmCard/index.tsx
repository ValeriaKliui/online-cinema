import { FC, memo } from "react";
import { FilmCardProps } from "./interfaces";
import {
  Container,
  ContentContainer,
  Description,
  FilmImg,
  ImgContainer,
  Rating,
} from "./styled";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const FilmCard: FC<FilmCardProps> = memo(
  ({
    kinopoiskId,
    posterUrlPreview,
    nameRu,
    year,
    ratingImdb,
    ratingKinopoisk,
    expanded,
    nameEn,
    nameOriginal,
    genres,
    countries,
    children,
  }) => {
    const rating = (ratingImdb ?? ratingKinopoisk)?.toFixed(1);
    const link = PATHS_LINKS.films + "/" + kinopoiskId;

    return (
      <Container $expanded={expanded} key={kinopoiskId}>
        <Link to={link}>
          <ImgContainer>
            <FilmImg src={posterUrlPreview} />
          </ImgContainer>
        </Link>
        <ContentContainer $hasChildren={!!children}>
          <Description>
            <Link to={link}>
              <p className="m">{nameRu || nameEn || nameOriginal}</p>
            </Link>
            {year && <p>{year}</p>}
            {rating && <Rating>{rating}</Rating>}
            <p>{formatArrayToStrings(countries)}</p>
            <p>{formatArrayToStrings(genres)}</p>
          </Description>
          {children}
        </ContentContainer>
      </Container>
    );
  },
);
