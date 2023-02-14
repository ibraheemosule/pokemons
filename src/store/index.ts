import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import pokemonsReducer from './reducers/pokemonsReducer';
import pokedexReducer from './reducers/pokedexReducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokedex: pokedexReducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof store>;
export type AppDispatch = StoreType['dispatch'];
