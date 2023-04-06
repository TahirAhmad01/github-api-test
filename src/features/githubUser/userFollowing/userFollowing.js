import { githubApi } from "../api/apiSlice";

export const userFollowing = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    userFollowing: builder.query({
      query: (userName) => `/users/${userName}/following`,
    }),
  }),
});

export const { useUserFollowingQuery } = userFollowing;
