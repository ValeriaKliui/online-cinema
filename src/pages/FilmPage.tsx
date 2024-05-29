import { FilmBlock } from "@components/FilmBlock";
import { Gallery } from "@components/Gallery";
import { ReviewsSlider } from "@components/ReviewsSlider";
import { SimilarFilms } from "@components/SimilarFilms";
import { Staff } from "@components/Staff";
import { FilmBg } from "@shared/FilmBg";
import { useGetInfoAboutFilmQuery } from "@store/services/filmsApi";
import { useParams } from "react-router-dom";

export const FilmPage = () => {
  const kinopoiskId = Number(useParams().kinopoiskId);
  const { data: filmInfo } = useGetInfoAboutFilmQuery(kinopoiskId);
  const {
    nameRu,
    year,
    filmLength,
    countries,
    genres,
    description,
    posterUrl,
  } = filmInfo ?? {};

  return (
    <>
      <FilmBg $posterUrl={posterUrl}>
        <FilmBlock
          nameRu={nameRu}
          year={year}
          filmLength={filmLength}
          countries={countries}
          genres={genres}
          description={description}
          posterUrl={posterUrl}
          kinopoiskId={kinopoiskId}
        />
      </FilmBg>
      <Staff kinopoiskId={kinopoiskId} />
      <ReviewsSlider kinopoiskId={kinopoiskId} />
      <Gallery kinopoiskId={kinopoiskId} />
      <SimilarFilms kinopoiskId={kinopoiskId} />
    </>
  );
};
