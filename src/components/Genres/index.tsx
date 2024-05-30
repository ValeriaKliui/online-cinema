import { Text, TextContainer } from "@components/Search/styled";
import { Genre } from "./Genre";
import { GENRES_ALL } from "@constants/filmsApi";
import { Container } from "./styled";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi/filmsApi";
import { useNavigate } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { Slider } from "@shared/Slider";
import { GENRES } from "@store/services/entities";

export const Genres = () => {
  const [getByGenre] = useLazyGetFilmsByFiltersQuery();
  const navigate = useNavigate();

  const onGenreClick = (genres: GENRES) => {
    getByGenre({ genres });
    navigate(PATHS_LINKS.films + `?genres=${genres}&page=1`);
  };

  return (
    <Container className="wrapper">
      <TextContainer>
        <h5>Смотрите фильмы, которые вам нравятся</h5>
        <Text className="subtext">
          На нашем сайте вы найдете подходящие вам фильмы и сериалы
        </Text>
      </TextContainer>
      <Slider
        itemsAmount={3}
        items={GENRES_ALL}
        renderItem={({ genreName, Icon, amount, genre }) => (
          <Genre
            genreName={genreName}
            Icon={Icon}
            amount={amount}
            genre={genre}
            onClick={onGenreClick}
          />
        )}
      />
    </Container>
  );
};
