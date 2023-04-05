import { configureStore } from "@reduxjs/toolkit";
// import { githubApi } from "../features/githubUser/api/apiSlice";
import { githubApi } from "./../features/githubUser/api/apiSlice";
import findUserSliceReducer from "../features/githubUser/findUsers/findUserSlice";
import  gitRepoSliceReducer  from "../features/githubUser/gitRepo/gitRepoSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    findUser: findUserSliceReducer,
    gitRepo: gitRepoSliceReducer
  },
});
