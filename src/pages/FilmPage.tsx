import { FilmBlock } from "@components/FilmBlock";
import { Gallery } from "@components/Gallery";
import { Reviews } from "@components/Reviews";
import { SimilarFilms } from "@components/SimilarFilms";
import { Staff } from "@components/Staff";
import { FilmBg } from "@shared/FilmBg";
import {
  useGetInfoAboutFilmQuery,
  useGetVideosQuery,
} from "@store/services/filmsApi";
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

  const { data: videos } = useGetVideosQuery(kinopoiskId);

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
      <div>
        <div className="wrapper">
          <h5>Трейлеры</h5>
          {videos &&
            videos.map(({ url, name }) => (
              <div key={url}>
                <p>{name}</p>
                <iframe width="320" height="240" src={url} />
              </div>
            ))}
        </div>
        <Staff kinopoiskId={kinopoiskId} />
        <Reviews kinopoiskId={kinopoiskId} />
        <Gallery kinopoiskId={kinopoiskId} />
        <SimilarFilms kinopoiskId={kinopoiskId} />
      </div>
    </>
  );
};
