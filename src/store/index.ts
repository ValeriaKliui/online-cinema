import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import filmsReducer from "./slices/filmsSlice/filmsSlice";
import userReducer from "./slices/userSlice/userSlice";
import appReducer from "./slices/appSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer,
    app: appReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
