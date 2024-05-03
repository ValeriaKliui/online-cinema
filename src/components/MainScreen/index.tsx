import {
  useGetInfoAboutFilmQuery,
  useGetPremieresQuery,
} from "@store/services/filmsApi";
import { getRandomFilm } from "@utils/getRandomFilm";
import { useMemo } from "react";
import { FilmInfo, FilmContainer, Description, SubText } from "./styled";
import { Button } from "@shared/Button";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import { getDateForPremiers } from "@utils/getDateForPremiers";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { FilmBg } from "@shared/FilmBg";

export const MainScreen = () => {
  const { year: premierYear, month } = getDateForPremiers();
  const { data: premieres } = useGetPremieresQuery({
    year: premierYear,
    month,
  });

  const premier = useMemo(
    () => premieres && getRandomFilm(premieres),
    [premieres],
  );
  const { kinopoiskId } = premier ?? {};

  const { data: premierInfo } = useGetInfoAboutFilmQuery(kinopoiskId, {
    skip: !kinopoiskId,
  });

  const { posterUrl, year, nameRu, description } = premierInfo ?? {};

  const descriptionCut = description?.split(".").slice(0, 2).join(".") + ".";

  return (
    <FilmBg $posterUrl={posterUrl}>
      <FilmContainer className="wrapper">
        <FilmInfo>
          <SubText className="subtext">Выбор Illuminous</SubText>
          <h2>{nameRu} </h2>
          {year && <p className="xs">{year}</p>}
          {description && (
            <Description className="medium">{descriptionCut}</Description>
          )}
        </FilmInfo>
        <Link to={PATHS_LINKS.films + "/" + kinopoiskId}>
          <Button>
            Смотреть <YoutubeSvg />
          </Button>
        </Link>
      </FilmContainer>
    </FilmBg>
  );
};
