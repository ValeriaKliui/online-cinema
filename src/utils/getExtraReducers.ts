// import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// import { AppState } from "@store/slices/appSlice/interfaces";

// const getExtraReducers = (builder: ActionReducerMapBuilder<AppState>, api:) => {
//   const endpoints = filmsApi.endpoints;
//   const endpointsArray = Object.entries(endpoints);

//   return endpointsArray.map((endpoint) =>
//     builder.addMatcher(endpoint[1].matchRejected, (state, action) => {
//       state.isFilmsError = !!action.payload;
//     })
//   );
// };
