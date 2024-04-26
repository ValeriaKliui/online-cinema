import { RootState } from "..";

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectAuthError = (state: RootState) =>
  state.app.authorizationError;
