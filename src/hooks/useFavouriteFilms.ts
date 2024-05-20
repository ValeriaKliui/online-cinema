import { useAppSelector } from "@store/interfaces/hooks";
import { selectUserId } from "@store/selectors/user";
import {
  useGetUserInfoQuery,
  useSaveFavouriteFilmsMutation,
} from "@store/services/userApi";
import { useCallback } from "react";

export const useFavouriteFilms = () => {
  // const dispatch = useAppDispatch();
  const userID = useAppSelector(selectUserId);

  const { data } = useGetUserInfoQuery(userID, {
    skip: !userID,
  });

  const [
    saveToFavourite,
    // , result
  ] = useSaveFavouriteFilmsMutation();

  // const [saveToFavourite] = useLazySaveFavouriteFilmsQuery();

  // const removeFromFavourite = useCallback(
  //   (kinopoiskId: string | number) => {
  //     const ID = Number(kinopoiskId);
  //     dispatch(removeFromFavourites(ID));
  //   },
  //   [dispatch]
  // );

  const addToFavourite = useCallback(
    (kinopoiskId: number) => {
      const { favouriteFilmsIDs } = data ?? {};

      const newFavIDs = [...favouriteFilmsIDs, kinopoiskId];
      console.log(newFavIDs);
      saveToFavourite({
        id: userID,
        favouriteFilmsIDs: newFavIDs,
      });
      // const isntAdded = !favouriteFilmsIDs.includes(kinopoiskId);
      // console.log(userID, isntAdded);
      // isntAdded
      //   ? dispatch(addToFavourites(kinopoiskId))
      //   : removeFromFavourite(kinopoiskId);
      // if (userID && isntAdded)
      //   saveToFavourite({
      //     id: userID,
      //     favouriteFilmsIDs: [...favouriteFilmsIDs, kinopoiskId],
      //   });
    },
    [
      data,
      saveToFavourite,
      userID,
      // favouriteFilmsIDs,
      // dispatch,
      // removeFromFavourite,
      // saveToFavourite,
      // userID,
    ],
  );

  return {
    addToFavourite,
    // removeFromFavourite, favouriteFilmsIDs
  };
};
