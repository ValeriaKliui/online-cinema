import { FAVOURITE_FILMS_URL } from "@constants/user";
import { RemoveFromFavouriteParams } from "./interfaces";

export const updateFavFilmsFn = async ({
  userExists = true,
  id,
  favouriteFilmsIDs,
}: RemoveFromFavouriteParams) => {
  const baseData = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  if (userExists)
    await fetch(`${FAVOURITE_FILMS_URL}/${id}`, {
      ...baseData,
      method: "PATCH",
      body: JSON.stringify({ favouriteFilmsIDs }),
    });
  else {
    await fetch(`${FAVOURITE_FILMS_URL}`, {
      ...baseData,
      method: "POST",
      body: JSON.stringify({ id, favouriteFilmsIDs }),
    });
  }
  return { data: "" };
};
