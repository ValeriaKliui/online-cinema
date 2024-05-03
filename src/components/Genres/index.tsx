import { Text, TextContainer } from "@components/Search/styled";
import { GENRES_NAMES } from "@store/services/interfaces";

export const Genres = () => {
  const genres = Object.values(GENRES_NAMES);

  return (
    <div>
      <TextContainer>
        <h5>Смотрите фильмы, которые вам нравятся</h5>
        <Text className="subtext">
          На нашем сайте вы найдете подходящие вам фильмы и сериалы
        </Text>
      </TextContainer>
      <div>
        {genres.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </div>
  );
};
