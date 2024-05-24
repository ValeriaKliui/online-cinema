import { Button } from "@shared/Button";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { FC } from "react";
import { FilmBlockProps } from "./interfaces";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import SaveSvg from "@assets/icons/save.svg?react";
import { Container, Poster, FilmProperties, FilmInfo, Buttons } from "./styled";
import {
  useGetFavoriteFilmsIDsQuery,
  useUpdateUserFavouriteFilmsMutation,
} from "@store/services/userApi";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";

export const FilmBlock: FC<FilmBlockProps> = ({
  nameRu,
  year,
  filmLength,
  countries,
  genres,
  description,
  posterUrl,
  kinopoiskId,
}) => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};
  const { data } = useGetFavoriteFilmsIDsQuery(id, { skip: id === 0 });
  const { favouriteFilmsIDs } = data ?? {};

  const isInFav = favouriteFilmsIDs && favouriteFilmsIDs.includes(kinopoiskId);

  const [updateFavFilmsIDs] = useUpdateUserFavouriteFilmsMutation();

  const updateFavIDs = () => {
    if (!isInFav) {
      updateFavFilmsIDs({
        id,
        favouriteFilmsIDs: [...favouriteFilmsIDs, kinopoiskId],
      });
    } else {
      updateFavFilmsIDs({
        id,
        favouriteFilmsIDs: favouriteFilmsIDs.filter(
          (filmID) => filmID !== kinopoiskId,
        ),
      });
    }
  };

  return (
    <Container className="wrapper">
      <Poster>
        <img src={posterUrl} />
      </Poster>
      <FilmInfo>
        <h2>{nameRu}</h2>
        <FilmProperties>
          <p>{year}</p>
          <p>{filmLength}м</p>
          <p>{formatArrayToStrings(countries)}</p>
          <p>{formatArrayToStrings(genres)}</p>
        </FilmProperties>
        <p>{description}</p>
        <Buttons>
          <Button>
            Смотреть по подписке <YoutubeSvg />
          </Button>
          <Button onClick={updateFavIDs}>
            {isInFav ? " В избранном" : "В избранное"}
            <SaveSvg />
          </Button>
        </Buttons>
      </FilmInfo>
    </Container>
  );
};
