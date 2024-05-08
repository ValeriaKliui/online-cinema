import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectFavouritesIDs, selectUserId } from "@store/selectors/user";
import { useLazySaveFavouriteFilmsQuery } from "@store/services/authorizeApi";
import { addToFavourites, removeFromFavourites } from "@store/slices/userSlice";
import { useCallback } from "react";

export const useFavouriteFilms = () => {
  const dispatch = useAppDispatch();
  const favouriteFilmsIDs = useAppSelector(selectFavouritesIDs);
  const userID = useAppSelector(selectUserId);
  const [saveToFavourite] = useLazySaveFavouriteFilmsQuery();

  const removeFromFavourite = useCallback(
    (kinopoiskId: string | number) => {
      const ID = Number(kinopoiskId);
      dispatch(removeFromFavourites(ID));
    },
    [dispatch],
  );

  const addToFavourite = useCallback(
    (kinopoiskId: string) => {
      const ID = Number(kinopoiskId);
      !favouriteFilmsIDs.includes(ID)
        ? dispatch(addToFavourites(ID))
        : removeFromFavourite(ID);
      saveToFavourite({
        id: userID,
        favouriteFilmsIDs: [...favouriteFilmsIDs, ID],
      });
    },
    [favouriteFilmsIDs, dispatch, removeFromFavourite, saveToFavourite, userID],
  );

  return { addToFavourite, removeFromFavourite, favouriteFilmsIDs };
};
