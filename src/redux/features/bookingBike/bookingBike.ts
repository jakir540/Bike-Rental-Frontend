import { baseApi } from "@/redux/api/baseApi";

const bookingBikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBikeBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/rentals",
        method: "POST",
        body: bookingInfo,
      }),
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/rentals/allRentals",
        method: "GET",
      }),
    }),
    returnBike: builder.mutation({
      query: (id) => ({
        url: `rentals/${id}/return`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreateBikeBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingQuery,
  useReturnBikeMutation,
} = bookingBikeApi;
