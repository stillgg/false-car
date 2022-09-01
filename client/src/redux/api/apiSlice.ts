import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetNewCarsResponse } from './types';

const API_URL = process.env.API_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getNewCars: builder.query<IGetNewCarsResponse, void>({
      query: () => 'new-cars',
    }),
  }),
});

export const { useGetNewCarsQuery } = apiSlice;
