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
  const { kinopoiskId: filmId } = useParams();
  const { data: filmInfo } = useGetInfoAboutFilmQuery(filmId);
  const {
    nameRu,
    year,
    filmLength,
    countries,
    genres,
    description,
    posterUrl,
  } = filmInfo ?? {};

  const { data: videos } = useGetVideosQuery(filmId);

  return (
    <div>
      <FilmBg $posterUrl={posterUrl}>
        <FilmBlock
          nameRu={nameRu}
          year={year}
          filmLength={filmLength}
          countries={countries}
          genres={genres}
          description={description}
          posterUrl={posterUrl}
          kinopoiskId={filmId}
        />
      </FilmBg>
      <div className="wrapper">
        <div>
          <p>трейлеры</p>
          {videos &&
            videos.map(({ url, name }) => (
              <div key={url}>
                <p>{name}</p>
                <iframe
                  width="320"
                  height="240"
                  src={url}
                  is="x-frame-bypass"
                />
              </div>
            ))}
        </div>
        <Staff filmID={filmId} />
        <Reviews filmID={filmId} />
        <Gallery filmID={filmId} />
        <SimilarFilms filmID={filmId} />
      </div>
    </div>
  );
};
