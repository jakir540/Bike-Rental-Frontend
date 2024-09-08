import { baseApi } from "@/redux/api/baseApi";

const showProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    showProfile: builder.query({
      query: () => ({
        method: "GET",
        url: "/users/me",
      }),
    }),
  }),
});

export const { useShowProfileQuery } = showProfile;
