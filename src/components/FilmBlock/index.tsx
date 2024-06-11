import { Button } from "@shared/Button";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { FC, memo } from "react";
import { FilmBlockProps } from "./interfaces";
import YoutubeSvg from "@assets/icons/youtube.svg?react";
import SaveSvg from "@assets/icons/save.svg?react";
import { Container, Poster, FilmProperties, FilmInfo, Buttons } from "./styled";
import {
  useGetFavoriteFilmsIDsQuery,
  useUpdateUserFavouriteFilmsMutation,
} from "@store/services/userApi/userApi";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useNavigate } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const FilmBlock: FC<FilmBlockProps> = memo(
  ({
    nameRu,
    year,
    filmLength,
    countries,
    genres,
    description,
    posterUrl,
    kinopoiskId,
  }) => {
    const navigate = useNavigate();
    const user = useAppSelector(selectUser);
    const { id = 0 } = user ?? {};
    const { data, error } = useGetFavoriteFilmsIDsQuery(id, { skip: !id });
    const { favouriteFilmsIDs = [] } = data ?? {};

    const isInFav =
      favouriteFilmsIDs && favouriteFilmsIDs.includes(kinopoiskId);

    const [updateFavFilmsIDs] = useUpdateUserFavouriteFilmsMutation();

    const updateFavIDs = () => {
      if (!user) navigate(PATHS_LINKS.register);

      const isInFav =
        favouriteFilmsIDs && favouriteFilmsIDs.includes(kinopoiskId);
      const updatedFavFilmsIDs = !isInFav
        ? [...favouriteFilmsIDs, kinopoiskId]
        : favouriteFilmsIDs.filter((filmID) => filmID !== kinopoiskId);

      updateFavFilmsIDs({
        id,
        favouriteFilmsIDs: updatedFavFilmsIDs,
        userExists: error ? false : true,
      });
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
            {filmLength && <p>{filmLength}м</p>}
            <p>{formatArrayToStrings(countries)}</p>
            <p>{formatArrayToStrings(genres)}</p>
            <p>{description}</p>
          </FilmProperties>
          <Buttons>
            <Button>
              Смотреть по подписке <YoutubeSvg />
            </Button>
            <Button onClick={updateFavIDs} isChoosen={isInFav}>
              {isInFav ? " В избранном" : "В избранное"}
              <SaveSvg />
            </Button>
          </Buttons>
        </FilmInfo>
      </Container>
    );
  },
);
