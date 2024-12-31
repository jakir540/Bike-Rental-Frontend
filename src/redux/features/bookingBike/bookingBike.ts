import { baseApi } from "@/redux/api/baseApi";

const bookingBikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBikeBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/rentals",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["rental"], // Invalidate rental data on creation
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
      providesTags: ["rental"], // Provide rental data tag
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/rentals/allRentals",
        method: "GET",
      }),
      providesTags: ["rental"], // Provide rental data tag
    }),
    returnBike: builder.mutation({
      query: (id) => ({
        url: `rentals/${id}/return`,
        method: "PUT",
      }),
      invalidatesTags: ["rental"], // Invalidate rental data on return
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `rentals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rental"], // Invalidate rental data on deletion
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
