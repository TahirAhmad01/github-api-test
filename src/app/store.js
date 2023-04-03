import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../features/githubUser/api/apiSlice";
import findUserSliceReducer from "../features/githubUser/findUserSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    findUser: findUserSliceReducer,
  },
});
