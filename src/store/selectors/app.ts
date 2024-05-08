import { RootState } from "..";

export const selectSearchKeyword = (state: RootState) =>
  state.app.searchKeyword;
