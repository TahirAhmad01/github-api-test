import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.github.com/",
});

export const githubApi = createApi({
  reducerPath: "getUsersApi",
  baseQuery,
  tagType: [],
  endpoints: (builder) => ({}),
});
