import { baseApi } from "@/redux/api/baseApi";

const showProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    showProfile: builder.query({
      query: () => ({
        method: "GET",
        url: "/users/me",
      }),
      providesTags: ["user"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: "/users/me",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

// https://bike-rental-app-mu.vercel.app/api/users/me
export const { useShowProfileQuery, useUpdateProfileMutation } = showProfile;
