import { githubApi } from "./api/apiSlice";

export const findUser = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users/TahirAhmad01`,
    }),
  }),
});

export const { useGetUsersQuery } = findUser;
