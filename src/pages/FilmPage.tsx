import { FilmCard } from "@components/FilmCard";
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
  const { filmID } = useParams();
  const { data: filmInfo } = useGetInfoAboutFilmQuery(filmID);
  const {
    nameRu,
    year,
    filmLength,
    countries,
    genres,
    description,
    posterUrl,
  } = filmInfo ?? {};

  const { data: videos } = useGetVideosQuery(filmID);

  return (
    <div>
      <FilmBg $posterUrl={posterUrl}>
        <FilmCard
          nameRu={nameRu}
          year={year}
          filmLength={filmLength}
          countries={countries}
          genres={genres}
          description={description}
          posterUrl={posterUrl}
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
        <Staff filmID={filmID} />
        <Reviews filmID={filmID} />
        <Gallery filmID={filmID} />
        <SimilarFilms filmID={filmID} />
      </div>
    </div>
  );
};
