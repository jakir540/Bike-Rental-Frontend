import { baseApi } from "@/redux/api/baseApi";

const AllBikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation({
      query: (bikeData) => ({
        url: "/bikes",
        method: "POST",
        body: bikeData,
      }),
      invalidatesTags: ["bike"],
    }),
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
      providesTags: ["bike"],
    }),

    getSingleBike: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
    }),
    updateBike: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/bikes/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["bike"],
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
  useCreateBikeMutation,
} = AllBikesApi;
