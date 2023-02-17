import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  INamedPokedexDetail,
  IPokedex,
  IPokedexState,
} from '../../utils/ts-types';
import { getPokedex } from './apiCalls';
import { BASE_URL } from '../../utils';

const initialState: IPokedexState = {
  pokedexDetailsList: {},
  searching: false,
  searchError: '',
  searchByIdResult: [],
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    addToPokedexDetailsList(
      state: IPokedexState,
      action: PayloadAction<INamedPokedexDetail>
    ) {
      state.pokedexDetailsList = {
        ...state.pokedexDetailsList,
        ...action.payload,
      };
    },
    resetSearchByIdResult(state: IPokedexState) {
      state.searchByIdResult = [];
    },

    setSearchError(state: IPokedexState, action: PayloadAction<string>) {
      state.searchError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPokedex.pending, (state) => {
      state.searching = true;
      state.searchError = '';
    }),
      builder.addCase(
        getPokedex.fulfilled,
        (state: IPokedexState, { payload }: { payload: IPokedex }) => {
          state.pokedexDetailsList = {
            ...state.pokedexDetailsList,
            [payload.name]: payload,
          };

          state.searching = false;
          state.searchError = '';

          const data = [
            { name: payload.name, url: `${BASE_URL}/${payload.id}/` },
          ];

          state.searchByIdResult = data;
        }
      ),
      builder.addCase(getPokedex.rejected, (state) => {
        state.searching = false;
        state.searchError = 'Cannot Find Pokedex';
      });
  },
});

export const {
  addToPokedexDetailsList,
  resetSearchByIdResult,
  setSearchError,
} = pokedexSlice.actions;

export default pokedexSlice.reducer;
