import { githubApi } from "../api/apiSlice";

export const userFollowers = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    userFollowers: builder.query({
      query: (userName) => `/users/${userName}/followers`,
    }),
  }),
});

export const { useUserFollowersQuery } = userFollowers;
