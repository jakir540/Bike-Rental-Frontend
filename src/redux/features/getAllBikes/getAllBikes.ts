import { baseApi } from "@/redux/api/baseApi";

const getAllBikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery } = getAllBikesApi;
