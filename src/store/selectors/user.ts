import { RootState } from "..";

export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectUserId = (state: RootState) => state.user.user?.id;
export const selectFavouritesIDs = (state: RootState) =>
  state.user.favouriteFilmsIDs;

export const selectAuthError = (state: RootState) =>
  state.app.authorizationError;
