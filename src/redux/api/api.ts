/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rental-shop.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        method: "GET",
        url: "/bikes",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery } = baseApi;
