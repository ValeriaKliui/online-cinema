import { filmsApi } from '@/store/services/filmsApi';
import { createSlice } from '@reduxjs/toolkit';
import { FilmsState } from './interfaces';

const initialState: FilmsState = {
  premier: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    unsetPremier: (state) => {
      state.premier = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      filmsApi.endpoints.getInfoAboutFilm.matchFulfilled,
      (state, action) => {
        state.premier = action.payload;
      }
    );
  },
});

export const { unsetPremier } = filmsSlice.actions;
export default filmsSlice.reducer;
