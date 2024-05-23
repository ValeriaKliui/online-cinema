import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filmsApi } from "./services/filmsApi";
import filmsReducer from "./slices/filmsSlice/filmsSlice";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer,
    app: appReducer,
    [api.reducerPath]: api.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
