import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemons } from './apiCalls';
import { pokemonListType } from '../../utils/ts-types';

interface IState {
  pokemonsList: pokemonListType[];
  immutablePokemonsList: pokemonListType[];
  loading: boolean;
  error: string;
}

const initialState: IState = {
  pokemonsList: [],
  immutablePokemonsList: [],
  loading: false,
  error: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initializePokemonsList(state, action: PayloadAction<pokemonListType[]>) {
      state.immutablePokemonsList = state.pokemonsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
      state.error = '';
    }),
      builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = '';

        state.immutablePokemonsList = state.pokemonsList = [
          ...state.immutablePokemonsList,
          ...payload.results,
        ];
      }),
      builder.addCase(getPokemons.rejected, (state) => {
        state.loading = false;
        state.error = 'Unable To Fetch Templates';
      });
  },
});

export const { initializePokemonsList } = dataSlice.actions;

export default dataSlice.reducer;
