import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemons } from './apiCalls';
import { pokemonListType, IPokemonsState } from '../../utils/ts-types';

const initialState: IPokemonsState = {
  pokemonsList: [],
  immutablePokemonsList: [],
  paginatedList: [],
  loading: false,
  error: '',
};

const dataSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchPokemonsList(state, action: PayloadAction<pokemonListType[]>) {
      state.immutablePokemonsList = state.pokemonsList = action.payload;
    },

    setPokemonList(state, action: PayloadAction<pokemonListType[]>) {
      state.pokemonsList = action.payload;
    },

    resetPokemonList(state) {
      state.pokemonsList = state.immutablePokemonsList;
    },

    setPaginatedList(state, action: PayloadAction<pokemonListType[]>) {
      state.paginatedList = action.payload;
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

        state.immutablePokemonsList = state.pokemonsList = payload.results;
        state.paginatedList = payload.results.slice(0, 8);
      }),
      builder.addCase(getPokemons.rejected, (state) => {
        state.loading = false;
        state.error = 'Unable To Fetch Data';
      });
  },
});

export const {
  fetchPokemonsList,
  setPokemonList,
  resetPokemonList,
  setPaginatedList,
} = dataSlice.actions;

export default dataSlice.reducer;
