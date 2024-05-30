import {
  ActionReducerMapBuilder,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { QueryThunkArg } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { api } from "@store/services/api";
import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { PremierParams } from "@store/services/filmsApi/interfaces";
import { AppState } from "@store/slices/appSlice/interfaces";

export const getRejectedExtraReducers = (
  builder: ActionReducerMapBuilder<AppState>,
  api: typeof filmsApi,
  applyFunc: (_: unknown, action: PayloadAction<FetchBaseQueryError>) => void,
) => {
  const endpoints = api.endpoints;
  const endpointsArray = Object.entries(endpoints);

  return endpointsArray.map((endpoint) =>
    builder.addMatcher(endpoint[1].matchRejected, applyFunc),
  );
};
