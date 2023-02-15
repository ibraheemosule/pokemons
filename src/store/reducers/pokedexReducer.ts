import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPokedexState } from '../../utils/ts-types';
import { getPokedex } from './apiCalls';
import { BASE_URL } from '../../utils';

const initialState: IPokedexState<object> = {
  pokedexDetailsList: {},
  searching: false,
  searchError: '',
  searchByIdResult: [],
};

const pokedexSlice = createSlice({
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
    resetSearchByIdResult<T>(state: IPokedexState<T>) {
      state.searchByIdResult = [];
    },

    resetSearchError<T>(state: IPokedexState<T>) {
      state.searchError = '';
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPokedex.pending, (state) => {
      state.searching = true;
      state.searchError = '';
    }),
      builder.addCase(
        getPokedex.fulfilled,
        (state: IPokedexState<object>, { payload }: { [key: string]: any }) => {
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
  resetSearchError,
} = pokedexSlice.actions;

export default pokedexSlice.reducer;
