import { githubApi } from "./api/apiSlice";

export const findUser = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (prefix) => `/user/tahirahmad01`,
    }),
  }),
});

export const { useGetUsersQuery } = findUser;
