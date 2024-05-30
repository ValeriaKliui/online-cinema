import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AppState } from "@store/slices/appSlice/interfaces";
export const getRejectedExtraReducers = (
  builder: ActionReducerMapBuilder<AppState>,
  api,
  applyFunc,
) => {
  const endpoints = api.endpoints;
  const endpointsArray = Object.entries(endpoints);

  return endpointsArray.map((endpoint) =>
    builder.addMatcher(endpoint[1].matchRejected, applyFunc),
  );
};
