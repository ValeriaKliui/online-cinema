import { Text, TextContainer } from "@components/Search/styled";
import { Genre } from "./Genre";
import { GENRES_ALL } from "@constants/filmsApi";
import { Container, GenresContainer } from "./styled";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { GENRES } from "@store/services/interfaces";
import { Link, useNavigate } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const Genres = () => {
  const [getByGenre] = useLazyGetFilmsByFiltersQuery();
  const navigate = useNavigate()

  const onGenreClick = (genres: GENRES) => {
    getByGenre({ genres });
    navigate(PATHS_LINKS.films + `?genres=${genres}&page=1`)
  };

  return (
    <Container className="wrapper">
      <TextContainer>
        <h5>Смотрите фильмы, которые вам нравятся</h5>
        <Text className="subtext">
          На нашем сайте вы найдете подходящие вам фильмы и сериалы
        </Text>
      </TextContainer>
      <GenresContainer>
        ARROW
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
    </Container>
  );
};
