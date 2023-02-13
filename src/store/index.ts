import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
