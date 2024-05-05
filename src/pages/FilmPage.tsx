import { FilmCard } from "@components/FilmCard";
import { FilmBg } from "@shared/FilmBg";
import {
  useGetInfoAboutFilmQuery,
  useGetVideosQuery,
} from "@store/services/filmsApi";
import { useParams } from "react-router-dom";

export const FilmPage = () => {
  const { kinopoiskId } = useParams();
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
          kinopoiskId={kinopoiskId}
        />
      </FilmBg>
      <div className="wrapper">
        <div>
          {" "}
          {videos &&
            videos.map(({ url, name }) => (
              <div>
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
      </div>
    </div>
  );
};
