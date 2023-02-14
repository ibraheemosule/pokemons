import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPokedexState } from '../../utils/ts-types';

const initialState: IPokedexState<object> = {
  pokedexDetailsList: {},
};

const dataSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    addToPokedexDetailsList<T>(
      state: IPokedexState<T>,
      action: PayloadAction<T>
    ) {
      state.pokedexDetailsList = {
        ...state.pokedexDetailsList,
        ...action.payload,
      };
    },
  },
});

export const { addToPokedexDetailsList } = dataSlice.actions;

export default dataSlice.reducer;
