import { Text, TextContainer } from "@components/Search/styled";
import { Genre } from "./Genre";
import { GENRES_ALL } from "@constants/filmsApi";
import { GenresContainer } from "./styled";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { GENRES } from "@store/services/interfaces";

export const Genres = () => {
  const [getByGenre] = useLazyGetFilmsByFiltersQuery();

  const onGenreClick = (genres: GENRES) => {
    getByGenre({ genres });
  };

  return (
    <div>
      <TextContainer>
        <h5>Смотрите фильмы, которые вам нравятся</h5>
        <Text className="subtext">
          На нашем сайте вы найдете подходящие вам фильмы и сериалы
        </Text>
      </TextContainer>
      <GenresContainer>
        {GENRES_ALL.map(({ genreName, Icon, amount, genre }) => (
          <Genre
            genreName={genreName}
            Icon={Icon}
            amount={amount}
            genre={genre}
            onClick={onGenreClick}
          />
        ))}
      </GenresContainer>
    </div>
  );
};
