import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import {
  useGetFavoriteFilmsIDsQuery,
  // useUpdateUserFavouriteFilmsMutation, // useGetUserInfoQuery,
  // useSaveFavouriteFilmsMutation,
} from "@store/services/userApi";
import { useCallback } from "react";

export const useFavouriteFilms = () => {
  const { id = 0 } = useAppSelector(selectUser) ?? {};

  const updateFavFilmsIDs = useCallback(() => {
    // console.log(id);
  }, []);

  // const [saveToFav] = useUpdateUserFavouriteFilmsMutation();
  const { data } = useGetFavoriteFilmsIDsQuery(id);
  const { favouriteFilmsIDs } = data ?? {};

  // const dispatch = useAppDispatch();
  //

  // const { data } = useGetUserInfoQuery(userID, {
  //   skip: !userID,
  // });

  // const saveToFavourite = () => {};
  // const [
  //   saveToFavourite,
  //   // , result
  // ] = useSaveFavouriteFilmsMutation();

  // const [saveToFavourite] = useLazySaveFavouriteFilmsQuery();

  // const removeFromFavourite = useCallback(
  //   (kinopoiskId: string | number) => {
  //     const ID = Number(kinopoiskId);
  //     dispatch(removeFromFavourites(ID));
  //   },
  //   [dispatch]
  // );

  const addToFavourite = useCallback(() =>
    // kinopoiskId: number
    {
      // const { favouriteFilmsIDs } = data ?? {};
      // const newFavIDs = [...favouriteFilmsIDs, kinopoiskId];
      // console.log(newFavIDs);
      // saveToFavourite({
      //   id: userID,
      //   favouriteFilmsIDs: newFavIDs,
      // });
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
    }, []);

  return {
    addToFavourite,
    updateFavFilmsIDs,
    favouriteFilmsIDs,
    // removeFromFavourite, favouriteFilmsIDs
  };
};
