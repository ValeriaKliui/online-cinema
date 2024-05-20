import { RootState } from "..";

export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectUserId = (state: RootState) => state.user.user?.id;
export const selectUserEmail = (state: RootState) => state.user.user?.email;

export const selectAuthError = (state: RootState) =>
  state.app.authorizationError;
