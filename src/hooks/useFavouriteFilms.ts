import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectUserId } from "@store/selectors/user";
import {
  useGetUserInfoQuery,
  useLazySaveFavouriteFilmsQuery,
} from "@store/services/authorizeApi";
import { addToFavourites, removeFromFavourites } from "@store/slices/userSlice";
import { useCallback } from "react";

export const useFavouriteFilms = () => {
  const dispatch = useAppDispatch();
  const userID = useAppSelector(selectUserId);
  const [saveToFavourite] = useLazySaveFavouriteFilmsQuery();

  const { favouriteFilmsIDs } = useGetUserInfoQuery(userID, { skip: !userID });

  const removeFromFavourite = useCallback(
    (kinopoiskId: string | number) => {
      const ID = Number(kinopoiskId);
      dispatch(removeFromFavourites(ID));
    },
    [dispatch],
  );

  const addToFavourite = useCallback(
    (kinopoiskId: number) => {
      const isntAdded = !favouriteFilmsIDs.includes(kinopoiskId);

      console.log(userID, isntAdded);

      isntAdded
        ? dispatch(addToFavourites(kinopoiskId))
        : removeFromFavourite(kinopoiskId);

      if (userID && isntAdded)
        saveToFavourite({
          id: userID,
          favouriteFilmsIDs: [...favouriteFilmsIDs, kinopoiskId],
        });
    },
    [favouriteFilmsIDs, dispatch, removeFromFavourite, saveToFavourite, userID],
  );

  return { addToFavourite, removeFromFavourite, favouriteFilmsIDs };
};
