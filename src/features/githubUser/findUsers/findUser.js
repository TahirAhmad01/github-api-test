import { githubApi } from "../api/apiSlice";

export const findUser = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (userName) => `/users/${userName}`,
    }),
  }),
});

export const { useGetUsersQuery } = findUser;
