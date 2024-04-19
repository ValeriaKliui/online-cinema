import { filmsApi } from '@/store/services/filmsApi';
import { createSlice } from '@reduxjs/toolkit';
import { FilmsState } from './interfaces';

const initialState: FilmsState = {
  premier: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      filmsApi.endpoints.getInfoAboutFilm.matchFulfilled,
      (state, action) => {
        state.premier = action.payload;
      }
    );
  },
});

// export const { setPremier } = filmsSlice.actions;
export default filmsSlice.reducer;
