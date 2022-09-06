import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetBrandsResponse, IGetNewCarsResponse } from './types';

const API_URL = process.env.API_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + 'cars',
  }),
  endpoints: (builder) => ({
    getNewCars: builder.query<IGetNewCarsResponse, void>({
      query: () => 'new-cars',
    }),
    getBrands: builder.query<IGetBrandsResponse, void>({
      query: () => 'brands',
    }),
  }),
});

export const { useGetNewCarsQuery, useGetBrandsQuery } = apiSlice;
