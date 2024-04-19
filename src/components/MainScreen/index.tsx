import { useAppDispatch } from "@/store/interfaces/hooks";
import {
  useGetInfoAboutFilmQuery,
  useGetPremieresQuery,
} from "@/store/services/filmsApi";
import { setPremier } from "@/store/slices/filmsSlice/filmsSlice";
import { getRandomFilm } from "@/utils/getRandomFilm";
import { useEffect } from "react";
import { Container, FilmInfo, FilmContainer } from "./styled";
import { Button } from "@/shared/Button";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import { formatArrayToStrings } from "@/utils/formatArrayToStrings";
import { getDateForPremiers } from "@/utils/getDateForPremiers";

export const MainScreen = () => {
  const dispatch = useAppDispatch();
  const { year: premierYear, month } = getDateForPremiers();

  const {
    data: premieres,
    // error, isLoading
  } = useGetPremieresQuery({
    year: premierYear,
    month,
  });
  const { items } = premieres ?? {};

  const premier = items && getRandomFilm(items);
  const { posterUrl, year, countries, genres, nameRu, kinopoiskId } =
    premier ?? {};
  const genresFormatted = genres && formatArrayToStrings(genres);
  const contriesFormatted = countries && formatArrayToStrings(countries);
  const { data } = useGetInfoAboutFilmQuery(kinopoiskId);
  console.log(data);

  useEffect(() => {
    if (premier) dispatch(setPremier(premier));
  }, [premier, dispatch]);

  return (
    <Container $posterUrl={posterUrl}>
      <FilmContainer className="wrapper">
        <FilmInfo>
          <p>{year}</p>
          <h2>{nameRu} </h2>
          <p>{contriesFormatted}</p>
          <p>{genresFormatted}</p>
        </FilmInfo>{" "}
        <Button>
          Смотреть <YoutubeSvg />
        </Button>
      </FilmContainer>
    </Container>
  );
};
