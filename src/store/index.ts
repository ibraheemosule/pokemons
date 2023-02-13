import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  pokemons: dataReducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof store>;
export type AppDispatch = StoreType['dispatch'];
