import { baseApi } from "@/redux/api/baseApi";

const bookingBikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBikeBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/rentals",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["rental"],
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
      providesTags: ["rental"],
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/rentals/allRentals",
        method: "GET",
      }),
      providesTags: ["rental"],
    }),
    returnBike: builder.mutation({
      query: (id) => ({
        url: `rentals/${id}/return`,
        method: "PUT",
      }),
      invalidatesTags: ["rental"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `rentals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rental"],
    }),
  }),
});

export const {
  useCreateBikeBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingQuery,
  useReturnBikeMutation,
  useDeleteBookingMutation,
} = bookingBikeApi;
