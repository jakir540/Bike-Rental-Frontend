import { baseApi } from "@/redux/api/baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        method: "POST",
        url: "/auth/login",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
