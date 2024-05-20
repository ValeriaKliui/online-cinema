import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filmsApi } from "./services/filmsApi";
import filmsReducer from "./slices/filmsSlice/filmsSlice";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer,
    app: appReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
