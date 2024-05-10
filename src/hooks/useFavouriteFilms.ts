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
    [dispatch]
  );

  const addToFavourite = useCallback(
    (kinopoiskId: number) => {
      !favouriteFilmsIDs.includes(kinopoiskId)
        ? dispatch(addToFavourites(kinopoiskId))
        : removeFromFavourite(kinopoiskId);
      userID &&
        saveToFavourite({
          id: userID,
          favouriteFilmsIDs: [...favouriteFilmsIDs, kinopoiskId],
        });
    },
    [favouriteFilmsIDs, dispatch, removeFromFavourite, saveToFavourite, userID]
  );

  return { addToFavourite, removeFromFavourite, favouriteFilmsIDs };
};
