import { Premier } from "@/store/services/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmsState } from "./interfaces";

const initialState: FilmsState = {
  premier: null,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setPremier: (state, action: PayloadAction<Premier>) => {
      state.premier = action.payload;
    },
  },
});

export const { setPremier } = filmsSlice.actions;
export default filmsSlice.reducer;
