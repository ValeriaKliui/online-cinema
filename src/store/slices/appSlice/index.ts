import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./interfaces";

const initialState: AppState = {
  isFilmsError: false,
  authorizationError: null,
};

// const getEndpoind = (builder: ActionReducerMapBuilder<AppState>) => {
//   const endpoints = filmsApi.endpoints;
//   const endpointsArray = Object.entries(endpoints);

//   return endpointsArray.map((endpoint) =>
//     builder.addMatcher(endpoint[1].matchRejected, (state, action) => {
//       state.isFilmsError = !!action.payload;
//     })
//   );
// };

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers() {
    // getExtra;
    // getEndpoind(builder);
  },
});

export default appSlice.reducer;
