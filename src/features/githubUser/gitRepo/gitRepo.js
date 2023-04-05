import { githubApi } from "../api/apiSlice";

export const gitRepoApi = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    gitRepos: builder.query({
      query: (userName) => `/users/${userName}/repos`,
    }),
  }),
});

export const { useGitReposQuery } = gitRepoApi;
