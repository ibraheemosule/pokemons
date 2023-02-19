import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemons } from './apiCalls';
import { PokemonListType, IPokemonsState } from '../../utils/ts-types';

const initialState: IPokemonsState = {
  pokemonsList: [],
  immutablePokemonsList: [],
  paginatedList: [],
  loading: false,
  error: '',
  lastPaginatedNumber: 1,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchPokemonsList(state, action: PayloadAction<PokemonListType[]>) {
      state.immutablePokemonsList = state.pokemonsList = action.payload;
    },

    setPokemonList(state, action: PayloadAction<PokemonListType[]>) {
      state.pokemonsList = action.payload;
    },

    resetPokemonList(state) {
      state.pokemonsList = state.immutablePokemonsList;
    },

    setPaginatedList(state, action: PayloadAction<PokemonListType[]>) {
      state.paginatedList = action.payload;
    },
    setLastPaginatedNumber(state, action: PayloadAction<number>) {
      state.lastPaginatedNumber = action.payload;
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
  setLastPaginatedNumber,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
