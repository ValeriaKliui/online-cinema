import { RootState } from "..";

export const selectSearchKeyword = (state: RootState) =>
  state.app.searchKeyword;
export const selectTheme = (state: RootState) => state.app.theme;
