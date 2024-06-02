import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { AppState } from "@store/slices/appSlice/interfaces";

export const getRejectedExtraReducers = (
  builder: ActionReducerMapBuilder<AppState>,
  api: typeof filmsApi,
  applyFunc: (_: unknown, action: PayloadAction<FetchBaseQueryError>) => void,
) => {
  const endpoints = api.endpoints;
  const endpointsArray = Object.entries(endpoints);

  return endpointsArray.map((endpoint) =>
    // @ts-expect-error troubles with custome func
    builder.addMatcher(endpoint[1].matchRejected, applyFunc),
  );
};
