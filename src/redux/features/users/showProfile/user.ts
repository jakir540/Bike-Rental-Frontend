import { baseApi } from "@/redux/api/baseApi";

const showProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllusers: builder.query({
      query: () => ({
        method: "GET",
        url: "/users",
      }),
      providesTags: ["user"],
    }),
    promoteUserToAdmin: builder.mutation({
      query: (updatedUserRole) => {
        return {
          method: "PATCH",
          url: `/users/updateRole/${updatedUserRole.id}`,
          body: { role: updatedUserRole.role },
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/users/${id}`,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllusersQuery,
  usePromoteUserToAdminMutation,
  useDeleteUserMutation,
} = showProfile;
