import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filmsApi } from './services/filmsApi';
import filmsReducer from './slices/filmsSlice/filmsSlice';
import authReducer from './slices/authSlice';
import { authorizeApi } from './services/authorizeApi';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    auth: authReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [authorizeApi.reducerPath]: authorizeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(authorizeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
