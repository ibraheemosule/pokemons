import { fetchData } from '../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPokemons = createAsyncThunk('pokemons', fetchData);
