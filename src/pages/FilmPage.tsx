import { FilmBlock } from "@components/FilmBlock";
import { Gallery } from "@components/Gallery";
import { ReviewsSlider } from "@components/ReviewsSlider";
import { SimilarFilms } from "@components/SimilarFilms";
import { Staff } from "@components/Staff";
import { FilmBg } from "@shared/FilmBg";
import { Spinner } from "@shared/Spinner";
import { useGetInfoAboutFilmQuery } from "@store/services/filmsApi/filmsApi";
import { useParams } from "react-router-dom";

export const FilmPage = () => {
  const kinopoiskId = Number(useParams().kinopoiskId);
  const { data: filmInfo, isFetching } = useGetInfoAboutFilmQuery(kinopoiskId);
  const {
    nameRu,
    year,
    filmLength,
    countries,
    genres,
    description,
    posterUrl,
    nameEn,
    nameOriginal,
  } = filmInfo ?? {};
  if (isFetching) return <Spinner />;

  return (
    <>
      <FilmBg $posterUrl={posterUrl}>
        <FilmBlock
          nameRu={nameRu || nameEn || nameOriginal || ""}
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
