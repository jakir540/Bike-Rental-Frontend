import { baseApi } from "@/redux/api/baseApi";

const signUpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        method: "POST",
        url: "/auth/signup",
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation } = signUpApi;
