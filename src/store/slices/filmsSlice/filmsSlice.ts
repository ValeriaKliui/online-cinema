import { Film } from '@/store/services/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmsState } from './interfaces';

const initialState: FilmsState = {
  randomFilm: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setRandomFilm: (state, action: PayloadAction<Film>) => {
      state.randomFilm = action.payload;
    },
  },
});

export const { setRandomFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
