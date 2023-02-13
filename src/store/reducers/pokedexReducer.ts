import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPokedexState } from '../../utils/ts-types';

const initialState: IPokedexState = {
  pokedexDetailsList: [],
};

const dataSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    addToPokedexDetailsList(state, action: PayloadAction<[]>) {
      state.pokedexDetailsList = [
        ...state.pokedexDetailsList,
        ...action.payload,
      ];
    },
  },
});

export const { addToPokedexDetailsList } = dataSlice.actions;

export default dataSlice.reducer;
