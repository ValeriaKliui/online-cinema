import {
  useGetInfoAboutFilmQuery,
  useGetPremieresQuery,
} from "@store/services/filmsApi/filmsApi";
import { getRandomFilm } from "@utils/getRandomFilm";
import { useMemo } from "react";
import { FilmInfo, FilmContainer, Description, SubText } from "./styled";
import { Button } from "@shared/Button";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import { getDateForPremiers } from "@utils/getDateForPremiers";
import { PATHS_LINKS } from "@constants/paths";
import { FilmBg } from "@shared/FilmBg";
import { Spinner } from "@shared/Spinner";

export const MainScreen = () => {
  const { year: premierYear, month } = getDateForPremiers();
  const { data: premieres, isFetching } = useGetPremieresQuery({
    year: premierYear,
    month,
  });

  const premier = useMemo(
    () => premieres && getRandomFilm(premieres),
    [premieres],
  );
  const kinopoiskId = Number(premier?.kinopoiskId);

  const { data: premierInfo } = useGetInfoAboutFilmQuery(kinopoiskId, {
    skip: !kinopoiskId,
  });

  const { posterUrl, year, nameRu, description, nameEn, nameOriginal } =
    premierInfo ?? {};

  const descriptionCut = description?.split(".").slice(0, 2).join(".") + ".";

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <FilmBg $posterUrl={posterUrl}>
          <FilmContainer className="wrapper">
            <FilmInfo>
              <SubText className="subtext">Выбор Illuminous</SubText>
              <h2>{nameRu || nameEn || nameOriginal} </h2>
              {year && <p className="xs">{year}</p>}
              {description && (
                <Description className="medium">{descriptionCut}</Description>
              )}
            </FilmInfo>
            <Button link={PATHS_LINKS.films + "/" + kinopoiskId}>
              Смотреть <YoutubeSvg />
            </Button>
          </FilmContainer>
        </FilmBg>
      )}
    </>
  );
};
