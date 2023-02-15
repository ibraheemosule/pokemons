import { fetchData } from '../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPokemons = createAsyncThunk('pokemons', fetchData());
export const getPokedex = createAsyncThunk('pokedex', fetchData());
