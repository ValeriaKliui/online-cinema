import { FilmBlock } from "@components/FilmBlock";
import { Gallery } from "@components/Gallery";
import { ReviewsSlider } from "@components/ReviewsSlider";
import { SimilarFilms } from "@components/SimilarFilms";
import { Staff } from "@components/Staff";
import { Videos } from "@components/Videos";
import { FilmBg } from "@shared/FilmBg";
import { Spinner } from "@shared/Spinner";
import { useAppDispatch } from "@store/interfaces/hooks";
import { useGetInfoAboutFilmQuery } from "@store/services/filmsApi/filmsApi";
import { setFilmBg, unsetFilmBg } from "@store/slices/filmsSlice/filmsSlice";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmPage = () => {
  const kinopoiskId = Number(useParams().kinopoiskId);
  const { data: filmInfo, isFetching } = useGetInfoAboutFilmQuery(kinopoiskId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filmInfo) dispatch(setFilmBg(filmInfo));
    return () => {
      dispatch(unsetFilmBg());
    };
  }, [filmInfo, dispatch]);

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
      <Videos kinopoiskId={kinopoiskId} />
      <ReviewsSlider kinopoiskId={kinopoiskId} />
      <Gallery kinopoiskId={kinopoiskId} />
      <SimilarFilms kinopoiskId={kinopoiskId} />
    </>
  );
};

export default FilmPage;
