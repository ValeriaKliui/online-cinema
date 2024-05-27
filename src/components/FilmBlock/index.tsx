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
  const { id } = user ?? {};
  const { data, error } = useGetFavoriteFilmsIDsQuery(id, { skip: !id });
  const { favouriteFilmsIDs = [] } = data ?? {};

  const isInFav = favouriteFilmsIDs && favouriteFilmsIDs.includes(kinopoiskId);

  const [updateFavFilmsIDs] = useUpdateUserFavouriteFilmsMutation();

  const updateFavIDs = () => {
    const isInFav = favouriteFilmsIDs && favouriteFilmsIDs.includes(kinopoiskId);
    const noFavFilmsYet = !error && error?.status !== 404;
    const updatedFavFilmsIDs = !isInFav ? [...favouriteFilmsIDs, kinopoiskId] :
      favouriteFilmsIDs.filter(
        (filmID) => filmID !== kinopoiskId,
      )

    updateFavFilmsIDs({ id, favouriteFilmsIDs: updatedFavFilmsIDs, userExists: noFavFilmsYet })
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
