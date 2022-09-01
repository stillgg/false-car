import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

import newCarsReducer from './reducers/newCarsSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      newCars: newCarsReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
